import getDocsPaths from "src/docs/get-docs-paths";
import getDocsLeft from "src/docs/get-docs-left";
import getDocsRight from "src/docs/get-docs-right";
import getDocsContent from "src/docs/get-docs-content";

import Docs from "src/components/docs/docs";

export default function HowToUse({ left, right, content }) {
  return <Docs slug="how-to-use" left={left} right={right} content={content} />;
}

export function getStaticPaths() {
  return { paths: getDocsPaths("how-to-use"), fallback: false };
}

export function getStaticProps({ params }) {
  return {
    props: {
      left: getDocsLeft("how-to-use"),
      right: getDocsRight("how-to-use", params.section, params.subsection),
      content: getDocsContent("how-to-use", params.section, params.subsection),
    },
  };
}
