import getSectionsLeft from "src/docs/get-sections-left";

import Docs from "src/components/docs/docs";

export default function HowToUse({ sections }) {
  return <Docs sections={sections} />;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { section: "getting-started", subsection: "overview" } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { sections: getSectionsLeft("1.how-to-use") } };
}
