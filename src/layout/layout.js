import Header from "./components/header/header";
import Content from "./components/content";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
