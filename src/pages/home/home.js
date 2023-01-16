import Content from "./components/content"
import Hero from "./components/hero"
import Features from "./components/features"
import Steps from "./components/steps/steps"
import Footer from "./components/footer"

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
  )
}
