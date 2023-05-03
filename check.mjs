import fs from "fs";

const readdirRecursively = (rootDir) => {
  const dirents = fs.readdirSync(rootDir, { withFileTypes: true });

  const dirEnts = dirents.filter((dirent) => dirent.isDirectory());
  const fileEnts = dirents.filter((dirent) => dirent.isFile());

  const files = fileEnts.map((f) => `${rootDir}/${f.name}`);
  const dirfiles = dirEnts
    .map((d) => readdirRecursively(`${rootDir}/${d.name}`))
    .flat();

  return [...files, ...dirfiles];
};

const anyFiles = readdirRecursively(`./public`);
const textFiles = anyFiles.filter((file) =>
  /\.(js|html|json)$/.test(file.toLowerCase())
);

for (const textFile of textFiles) {
  const text = fs.readFileSync(textFile);

  if (!/\x00/.test(text)) {
    continue;
  }

  console.log(`${textFile} has NULL characters.`);
}
