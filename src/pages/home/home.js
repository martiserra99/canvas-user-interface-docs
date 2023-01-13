import Content from "./components/content/content";
import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import Steps from "./components/steps/steps";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Content>
        <Hero />
        <Features />
        <Steps />
      </Content>
      <Footer />
    </>
  );
}
