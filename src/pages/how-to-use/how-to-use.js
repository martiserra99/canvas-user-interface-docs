import getDocsPaths from "src/docs/get-docs-paths";
import getDocsLeft from "src/docs/get-docs-left";

import Docs from "src/components/docs/docs";

export default function HowToUse({ left }) {
  return <Docs slug="how-to-use" left={left} />;
}

export function getStaticPaths() {
  return { paths: getDocsPaths("how-to-use"), fallback: false };
}

export function getStaticProps() {
  return { props: { left: getDocsLeft("how-to-use") } };
}
