import {
  rootDir,
  slugToDir,
  dirsInDir,
  sectionData,
  subsections,
} from "./utils";

export default function getDocsLeft(docsSlug) {
  const docsDir = slugToDir(rootDir(), docsSlug);
  const sectionDirs = dirsInDir(docsDir);
  return sectionDirs.map((sectionDir) => ({
    ...sectionData(sectionDir),
    subsections: subsections(sectionDir),
  }));
}
