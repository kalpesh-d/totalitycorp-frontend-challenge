import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import ProductGrid from "../components/ProductGrid"

function Home() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='main'>
        <ProductGrid />
      </GridItem>
    </Grid>  
  )
}

export default Home