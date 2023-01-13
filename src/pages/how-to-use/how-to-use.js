import { getSubjects } from "src/server/server";

import Docs from "src/components/docs/docs";

export default function HowToUse({ subjects }) {
  return <Docs subjects={subjects} />;
}

export function getStaticProps() {
  return { props: { subjects: getSubjects("how-to-use") } };
}
