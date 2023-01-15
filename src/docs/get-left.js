import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function getLeft(dirName) {
  const dir = path.join(process.cwd(), "docs", dirName);
  const sectionsDirNames = getDirNames(dir);
  return sectionsDirNames.map((sectionDirName) => {
    const { slug, name } = getData(dir, sectionDirName);
    const subsections = getSubsections(dir, sectionDirName);
    return { slug, name, subsections };
  });
}

function getData(parentDir, dirName) {
  const dir = path.join(parentDir, dirName);
  const slug = dirName.split(".")[1];
  const file = path.join(dir, `${slug}.md`);
  const content = fs.readFileSync(file, "utf-8");
  return { slug, name: matter(content).data.name };
}

function getSubsections(docsDir, sectionDirName) {
  const sectionDir = path.join(docsDir, sectionDirName);
  const subsectionsDirNames = getDirNames(sectionDir);
  return subsectionsDirNames.map((subsectionDirName) => {
    const { slug, name } = getData(sectionDir, subsectionDirName);
    return { slug, name };
  });
}

function getDirNames(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => !item.isFile())
    .map((item) => item.name);
}
