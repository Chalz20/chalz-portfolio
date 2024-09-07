import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
   padding: 0px;
   margin: 0px;
   height: 100vh;
   background-color: rebeccapurple;
`

function App() {

  return (
   <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
   </Container> 
    
   
  )
}

export default App
