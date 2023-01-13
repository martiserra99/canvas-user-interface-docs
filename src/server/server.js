import path from "path";
import fs from "fs";

export function getSubjects(docs) {
  const docsDir = path.join(process.cwd(), docs);
  return fs.readdirSync(docsDir).map((subject) => {
    const subjectDir = path.join(docsDir, subject);
    return {
      slug: getSlug(subject),
      name: getName(subject),
      pages: fs.readdirSync(subjectDir).map((page) => ({
        slug: getSlug(page),
        name: getName(page),
      })),
    };
  });
}

function getSlug(dirName) {
  return dirName.split(".")[1];
}

function getName(dirName) {
  return getSlug(dirName)
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
}
