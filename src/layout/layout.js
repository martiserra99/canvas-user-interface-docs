import Header from "./header/header";
import Content from "./content/content";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
