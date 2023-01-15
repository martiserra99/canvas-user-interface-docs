import { pageDir, fileInDir, markdown, dirToSlug, dirsInDir } from "./utils";

export default function getDocsContent(docsSlug, sectionSlug, subsectionSlug) {
  const dir = pageDir(docsSlug, sectionSlug, subsectionSlug);
  return dirToContent(dir) + sections(dir);
}

function dirToContent(dir) {
  const file = fileInDir(dir, `${dirToSlug(dir)}.md`);
  return markdown(file).content;
}

function sections(dir) {
  const sectionDirs = dirsInDir(dir);
  return sectionDirs
    .map((sectionDir) => dirToContent(sectionDir) + subsections(sectionDir))
    .join("");
}

function subsections(sectionDir) {
  const subsectionDirs = dirsInDir(sectionDir);
  return subsectionDirs
    .map((subsectionDir) => dirToContent(subsectionDir))
    .join("");
}
