import getSectionsLeft from "src/docs/get-sections-left";

import Docs from "src/components/docs/docs";

export default function Elements({ sections }) {
  return <Docs slug="elements" sections={sections} />;
}

export function getStaticPaths() {
  return {
    paths: getSectionsLeft("2.elements").flatMap((section) =>
      section.subsections.map((subsection) => ({
        params: { section: section.slug, subsection: subsection.slug },
      }))
    ),
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { sections: getSectionsLeft("2.elements") } };
}
