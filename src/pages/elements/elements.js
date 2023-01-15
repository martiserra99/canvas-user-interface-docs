import getDocsPaths from "src/docs/get-docs-paths";
import getDocsLeft from "src/docs/get-docs-left";
import getDocsRight from "src/docs/get-docs-right";

import Docs from "src/components/docs/docs";

export default function Elements({ left, right }) {
  return <Docs slug="elements" left={left} right={right} />;
}

export function getStaticPaths() {
  return { paths: getDocsPaths("elements"), fallback: false };
}

export function getStaticProps({ params }) {
  return {
    props: {
      left: getDocsLeft("elements"),
      right: getDocsRight("elements", params.section, params.subsection),
    },
  };
}
