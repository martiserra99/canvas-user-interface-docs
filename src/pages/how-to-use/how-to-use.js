import getDocsPaths from "src/docs/get-docs-paths";
import getDocsLeft from "src/docs/get-docs-left";
import getDocsRight from "src/docs/get-docs-right";

import Docs from "src/components/docs/docs";

export default function HowToUse({ left, right }) {
  return <Docs slug="how-to-use" left={left} right={right} />;
}

export function getStaticPaths() {
  return { paths: getDocsPaths("how-to-use"), fallback: false };
}

export function getStaticProps({ params }) {
  return {
    props: {
      left: getDocsLeft("how-to-use"),
      right: getDocsRight("how-to-use", params.section, params.subsection),
    },
  };
}
