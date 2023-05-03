import { createRequire } from "module";
import { parse } from "path";
import { kebabCase } from "./src/libs/kebab-case.mjs";
import { removeUndefined } from "./src/libs/removeUndefined.mjs";

const require = createRequire(import.meta.url);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownPost(sort: { date: ASC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const edges = result.data.allMarkdownPost.edges;

  /**
   * Create each post page.
   */
  for (const { node } of edges) {
    createPage({
      path: node.slug, // `node.slug` may not start with `basePath` and `postPath` .
      component: require.resolve(`./src/templates/markdown-post.js`),
      context: {
        id: node.id,
      },
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
export const onCreateNode = ({
  actions,
  getNode,
  node,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions;

  if (node.internal.type !== `MarkdownRemark`) return;

  const { relativePath } = getNode(node.parent);

  const { name } = parse(relativePath);

  const overwrite = {
    date: node.frontmatter.date,
    heroImage: node.frontmatter.heroImage,
    heroImageAlt: node.frontmatter.heroImageAlt,
    tags: node.frontmatter.tags?.map((tag) => ({
      name: tag,
      slug: kebabCase(tag),
    })),
  };

  const fieldData = {
    ...{
      date: new Date(`9999-12-31T23:59:59.998Z`).toISOString(),
      heroImage: ``,
      heroImageAlt: ``,
      slug: name,
      tags: [],
      title: name,
    },
    ...removeUndefined(overwrite),
  };

  const id = createNodeId(`${node.id} >>> MarkdownPost`);

  createNode({
    ...fieldData,
    // Required fields
    id,
    parent: node.id,
    children: [],
    internal: {
      type: `MarkdownPost`,
      contentDigest: createContentDigest(fieldData),
      content: JSON.stringify(fieldData),
      description: `MarkdownPost`,
    },
  });

  createParentChildLink({ parent: node, child: getNode(id) });
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
export const createSchemaCustomization = ({ actions }, themeOptions) => {
  const { createFieldExtension, createTypes } = actions;

  const typeDefs = `
    type MarkdownPost implements Node {
      date: Date! @dateformat
      heroImage: File @fileByRelativePath
      heroImageAlt: String
      slug: String!
      tags: [PostTag]!
      title: String!
    }

    type PostTag {
      name: String!
      slug: String!
    }
  `;
  createTypes(typeDefs);

  createFieldExtension({
    name: `markdownRemarkResolverPassThrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: async (source, args, context, info) => {
          const type = info.schema.getType(`MarkdownRemark`);
          const markdownRemarkNode = context.nodeModel.getNodeById({
            id: source.parent,
          });
          const resolver = type.getFields()[fieldName].resolve;
          const result = await resolver(
            markdownRemarkNode,
            args,
            context,
            info
          );
          return result;
        },
      };
    },
  });
};
