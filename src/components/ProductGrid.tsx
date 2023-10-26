import { useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import ProductCard from './ProductCard';

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    price: string;
    rating: Rating;
  }

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('')
  
  useEffect(() => {
    apiClient.get('/products')
      .then(resp => setProducts(resp.data))
      .catch(err => setError(err.message))
  }, [])
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid 
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </SimpleGrid>
    </>
  )
}

export default ProductGrid