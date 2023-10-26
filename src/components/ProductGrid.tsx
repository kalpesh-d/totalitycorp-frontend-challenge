import { useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Product {
    id: number;
    title: string;
  }

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('')
  
  useEffect(() => {
    apiClient.get('/products')
      .then(resp => setProducts(resp.data))
      .catch(err => setError(err.message))
  })
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
          {products.map(product => <li key={product.id}>{product.title}</li>)}
      </ul>
    </>
  )
}

export default ProductGrid