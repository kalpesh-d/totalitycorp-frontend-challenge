import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import ProductGrid from "../components/ProductGrid"

function Home() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <NavBar />
      <GridItem area='main' mt='32'>
        <ProductGrid />
      </GridItem>
    </Grid>  
  )
}

export default Home