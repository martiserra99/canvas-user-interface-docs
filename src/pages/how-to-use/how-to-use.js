import getSectionsLeft from "src/docs/get-sections-left";

import Docs from "src/components/docs/docs";

export default function HowToUse({ sections }) {
  return <Docs sections={sections} />;
}

export function getStaticPaths() {
  return {
    paths: getSectionsLeft("1.how-to-use").flatMap((section) =>
      section.subsections.map((subsection) => ({
        params: { section: section.slug, subsection: subsection.slug },
      }))
    ),
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { sections: getSectionsLeft("1.how-to-use") } };
}
