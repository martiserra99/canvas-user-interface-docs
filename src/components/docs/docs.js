import Container from "./components/container/container";
import Content from "./components/content/content";
import Left from "./components/left/left";
import Right from "./components/right/right";

export default function Docs({ slug, left, right }) {
  return (
    <Container>
      <Left slug={slug} left={left} />
      <Content />
      <Right slug={slug} right={right} />
    </Container>
  );
}
