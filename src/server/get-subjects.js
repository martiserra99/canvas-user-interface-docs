import path from "path";
import fs from "fs";
import matter from "gray-matter";

export default function getSubjects(docsDirName) {
  const docsDir = path.join(process.cwd(), "docs", docsDirName);
  const subjectsDirNames = getDirNames(docsDir);
  return subjectsDirNames.map((subjectDirName) => {
    const { slug, name } = getData(docsDir, subjectDirName);
    const pages = getPages(docsDir, subjectDirName);
    return { slug, name, pages };
  });
}

function getData(parentDir, dirName) {
  const dir = path.join(parentDir, dirName);
  const fileName = dirName.split(".")[1] + ".md";
  const file = path.join(dir, fileName);
  const content = fs.readFileSync(file, "utf-8");
  return matter(content).data;
}

function getPages(docsDir, subjectDirName) {
  const subjectDir = path.join(docsDir, subjectDirName);
  const pagesDirNames = getDirNames(subjectDir);
  return pagesDirNames.map((pageDirName) => {
    const { slug, name } = getData(subjectDir, pageDirName);
    return { slug, name };
  });
}

function getDirNames(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => !item.isFile())
    .map((item) => item.name);
}
