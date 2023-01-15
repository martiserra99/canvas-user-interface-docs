import path from "path";
import fs from "fs";

import getDocsLeft from "src/docs/get-docs-left";

import Docs from "src/components/docs/docs";

export default function HowToUse({ left }) {
  return <Docs slug="how-to-use" left={left} />;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { section: "getting-started", subsection: "overview" } }],
    // paths: getDocsLeft("how-to-use").flatMap((section) =>
    //   section.subsections.map((subsection) => ({
    //     params: { section: section.slug, subsection: subsection.slug },
    //   }))
    // ),
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { left: getDocsLeft("how-to-use") } };
}
