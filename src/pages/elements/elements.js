import getSubjects from "src/server/get-subjects";

import Docs from "src/components/docs/docs";

export default function Elements({ subjects }) {
  return <Docs subjects={subjects} />;
}

export function getStaticProps() {
  return { props: { subjects: getSubjects("2.elements") } };
}
