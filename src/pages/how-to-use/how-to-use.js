import getSubjects from "src/server/get-subjects";

import Docs from "src/components/docs/docs";

export default function HowToUse({ subjects }) {
  return <Docs subjects={subjects} />;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { section: "getting-started", subsection: "overview" } }],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: { subjects: getSubjects("1.how-to-use") } };
}
