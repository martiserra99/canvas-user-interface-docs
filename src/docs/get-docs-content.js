import { pageDir, fileInDir, markdown, dirToSlug } from "./utils";

export default function getDocsContent(docsSlug, sectionSlug, subsectionSlug) {
  const dir = pageDir(docsSlug, sectionSlug, subsectionSlug);
  const file = fileInDir(dir, `${dirToSlug(dir)}.md`);
  return markdown(file).content;
}
