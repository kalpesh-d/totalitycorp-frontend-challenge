import { Box, Button, Container, Flex, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { SearchIcon } from "@chakra-ui/icons"
import Logo from '../assets/react.svg'

function NavBar() {
  return (
    <Box as="nav" py="6" fontSize="3xl" borderBottom="1px solid #eee" position="fixed" top="0" left="0" right="0" zIndex="2" bg="white" >
      <Container maxW="6xl">
        <Flex alignItems="center" justifyContent="space-between">
          <Image src={Logo} boxSize='50px' pl='10px'/>
          
          <InputGroup mx="10px" maxW="25em">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              size="md"
              variant="filled"
            />
          </InputGroup>
          
          <Flex fontSize="4xl" alignItems="center" justifyContent="center">
            <Button>
              <FontAwesomeIcon size="xl" icon={faCartShopping} />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar