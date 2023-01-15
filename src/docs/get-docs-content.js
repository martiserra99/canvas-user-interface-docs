import { pageDir, fileInDir, markdown, dirToSlug, dirsInDir } from "./utils";

export default function getDocsContent(docsSlug, sectionSlug, subsectionSlug) {
  const dir = pageDir(docsSlug, sectionSlug, subsectionSlug);
  return { ...sectionContent(dir), sections: sections(dir) };
}

function sectionContent(dir) {
  const slug = dirToSlug(dir);
  const file = fileInDir(dir, `${slug}.md`);
  const md = markdown(file);
  return { slug, title: md.data.title, content: md.content };
}

function sections(dir) {
  const sectionDirs = dirsInDir(dir);
  return sectionDirs.map((sectionDir) => ({
    ...sectionContent(sectionDir),
    subsections: subsections(sectionDir),
  }));
}

function subsections(sectionDir) {
  const subsectionDirs = dirsInDir(sectionDir);
  return subsectionDirs.map((subsectionDir) => sectionContent(subsectionDir));
}
