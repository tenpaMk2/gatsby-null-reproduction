import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";

export default ({ data: { current }, location }) => (
  <Layout {...{ current, location }} />
);

export const postQuery = graphql`
  query ($id: String!) {
    current: markdownPost(id: { eq: $id }) {
      date(formatString: "YYYY-MM-DDTHH:mm:ss.SSSZ")
      heroImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      heroImageAlt
      id
      slug
      tags {
        name
        slug
      }
      title
    }
  }
`;
