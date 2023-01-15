import { pageDir, dirsInDir, sectionData, subsections } from "./utils";

export default function getDocsRight(docsSlug, sectionSlug, subsectionSlug) {
  const sectionDirs = dirsInDir(pageDir(docsSlug, sectionSlug, subsectionSlug));
  return sectionDirs.map((sectionDir) => ({
    ...sectionData(sectionDir),
    subsections: subsections(sectionDir),
  }));
}
