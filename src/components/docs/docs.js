import Container from "./components/container/container";
import Content from "./components/content/content";
import Left from "./components/left/left";
import Right from "./components/right/right";

export default function Docs() {
  return (
    <Container>
      <Left />
      <Content />
      <Right />
    </Container>
  );
}
