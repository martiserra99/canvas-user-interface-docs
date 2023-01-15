import { docsDir, dirsInDir, sectionData, subsections } from "./utils";

export default function getDocsLeft(docsSlug) {
  const sectionDirs = dirsInDir(docsDir(docsSlug));
  return sectionDirs.map((sectionDir) => ({
    ...sectionData(sectionDir),
    subsections: subsections(sectionDir),
  }));
}
