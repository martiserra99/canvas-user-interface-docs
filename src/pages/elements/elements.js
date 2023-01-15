import getDocsLeft from "src/docs/get-docs-left";

import Docs from "src/components/docs/docs";

export default function Elements({ left }) {
  return <Docs slug="elements" left={left} />;
}

export function getStaticPaths() {
  return {
    paths: getDocsLeft("elements").flatMap((section) =>
      section.subsections.map((subsection) => ({
        params: { section: section.slug, subsection: subsection.slug },
      }))
    ),
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { left: getDocsLeft("elements") } };
}
