import {
  rootDir,
  slugToDir,
  dirsInDir,
  sectionData,
  subsections,
} from "./utils";

export default function getDocsRight(docsSlug, sectionSlug, subsectionSlug) {
  const pageDir = getPageDir(docsSlug, sectionSlug, subsectionSlug);
  const sectionDirs = dirsInDir(pageDir);
  return sectionDirs.map((sectionDir) => ({
    ...sectionData(sectionDir),
    subsections: subsections(sectionDir),
  }));
}

function getPageDir(docsSlug, sectionSlug, subsectionSlug) {
  const docsDir = slugToDir(rootDir(), docsSlug);
  const sectionDir = slugToDir(docsDir, sectionSlug);
  return slugToDir(sectionDir, subsectionSlug);
}
