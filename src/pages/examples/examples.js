import { useState } from "react"

import Content from "./components/content"
import Arrow from "./components/arrow"
import Example from "./components/example"
import NotAvailable from "./components/not-available"

const examples = [
  "https://martiserra99.github.io/puzzle/",
  "https://martiserra99.github.io/sudoku/",
  "https://martiserra99.github.io/tetris/",
]

export default function Examples() {
  const [position, setPosition] = useState(0)
  const handleLeft = () => {
    setPosition((currPosition) => {
      if (currPosition === 0) return examples.length - 1
      return currPosition - 1
    })
  }
  const handleRight = () => {
    setPosition((currPosition) => {
      if (currPosition === examples.length - 1) return 0
      return currPosition + 1
    })
  }
  return (
    <>
      <Content>
        <Arrow direction="left" onClick={handleLeft} />
        <Example src={examples[position]} />
        <Arrow direction="right" onClick={handleRight} />
      </Content>
      <NotAvailable />
    </>
  )
}
