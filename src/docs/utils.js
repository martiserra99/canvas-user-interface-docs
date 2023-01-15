import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function docsDir(docsSlug) {
  return slugToDir(rootDir(), docsSlug);
}

export function pageDir(docsSlug, sectionSlug, subsectionSlug) {
  const sectionDir = slugToDir(docsDir(docsSlug), sectionSlug);
  return slugToDir(sectionDir, subsectionSlug);
}

export function rootDir() {
  return path.join(process.cwd(), "docs");
}

export function slugToDir(dir, slug) {
  const dirName = dirNamesInDir(dir).find(
    (dirName) => dirName.split(".")[1] === slug
  );
  return path.join(dir, dirName);
}

export function dirsInDir(dir) {
  return dirNamesInDir(dir).map((dirName) => path.join(dir, dirName));
}

export function sectionData(sectionDir) {
  const sectionSlug = dirToSlug(sectionDir);
  const sectionFile = fileInDir(sectionDir, `${sectionSlug}.md`);
  const sectionName = markdown(sectionFile).data.name;
  return { slug: sectionSlug, name: sectionName };
}

export function subsections(sectionDir) {
  const subsectionDirs = dirsInDir(sectionDir);
  return subsectionDirs.map((subsectionDir) => sectionData(subsectionDir));
}

export function dirToSlug(dir) {
  return path.basename(dir).split(".")[1];
}

export function fileInDir(dir, fileName) {
  return path.join(dir, fileName);
}

export function markdown(file) {
  const content = fs.readFileSync(file, "utf-8");
  return matter(content);
}

export function dirNamesInDir(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((dirOrFile) => !dirOrFile.isFile())
    .map((dir) => dir.name);
}
