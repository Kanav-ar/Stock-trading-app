import { useState } from "react"
import Playground from "./pages/playground"

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <Playground/> 
    </>
  )
}

export default App
