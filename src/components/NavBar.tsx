import { HStack, Image, Text } from "@chakra-ui/react"
import Logo from '../assets/react.svg'

function NavBar() {
  return (
    <HStack>
        <Image src={Logo} boxSize='50px' pl='10px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar