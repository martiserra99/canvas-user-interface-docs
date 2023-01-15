import getLeft from "src/docs/get-left";

import Docs from "src/components/docs/docs";

export default function Elements({ sections }) {
  return <Docs sections={sections} />;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { section: "views", subsection: "area" } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { sections: getLeft("2.elements") } };
}
