import { Box, Button, Image } from "@chakra-ui/react"
import { Product } from "./ProductGrid"
import { StarIcon } from "@chakra-ui/icons"

interface Props {
    product: Product
}

function ProductCard({ product }:Props) {
  return (
    <Box width='300px' borderWidth='1.5px' borderRadius='lg' overflow='hidden' height='max-content'>
      <Image src={product.image} alt={product.title} pt={8} px={50}/>
      
      <Box p='6'>
        <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
          {product.category}
        </Box>
        <Box fontWeight='semibold' as='h4' lineHeight='tight' ml='2' noOfLines={1}>{product.title}</Box>
        <Box ml='2'>${product.price}</Box>

        <Box display='flex' mt='1' ml='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                boxSize={3}
                key={i}
                color={i < product.rating.rate ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {product.rating.count} reviews
          </Box>
        </Box>
          <Button mt='3' ml='2' variant='solid' size='sm' colorScheme='teal'>
            Add to cart
          </Button>
      </Box>
    </Box>
  )
}

export default ProductCard