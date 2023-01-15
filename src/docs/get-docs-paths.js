import { docsDir, dirsInDir, dirToSlug } from "./utils";

export default function getDocsPaths(docsSlug) {
  const sectionDirs = dirsInDir(docsDir(docsSlug));
  return sectionDirs.flatMap((sectionDir) => {
    const sectionSlug = dirToSlug(sectionDir);
    const subsectionDirs = dirsInDir(sectionDir);
    return subsectionDirs.map((subsectionDir) => ({
      params: { section: sectionSlug, subsection: dirToSlug(subsectionDir) },
    }));
  });
}
