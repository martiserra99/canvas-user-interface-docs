import {
  rootDir,
  slugToDir,
  dirsInDir,
  dirToSlug,
  fileInDir,
  markdown,
} from "./utils";

export default function getDocsLeft(docsSlug) {
  const docsDir = slugToDir(rootDir(), docsSlug);
  const sectionDirs = dirsInDir(docsDir);
  return sectionDirs.map((sectionDir) => ({
    ...sectionData(sectionDir),
    subsections: subsections(sectionDir),
  }));
}

function sectionData(sectionDir) {
  const sectionSlug = dirToSlug(sectionDir);
  const sectionFile = fileInDir(sectionDir, `${sectionSlug}.md`);
  const sectionName = markdown(sectionFile).data.name;
  return { slug: sectionSlug, name: sectionName };
}

function subsections(sectionDir) {
  const subsectionDirs = dirsInDir(sectionDir);
  return subsectionDirs.map((subsectionDir) => sectionData(subsectionDir));
}
