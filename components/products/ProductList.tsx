import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react'
import { IProduct } from '../../interfaces/product';
import { ProductCard } from './ProductCard';

interface Props {
    products: IProduct[];
}

export const ProductList: FC<Props> = ({products}) => {
  return (
    <>
      
      <Typography variant='h4' sx={{mb: 5}}>
        Product List
      </Typography>

      <Grid container spacing={4}>
        
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
          
      </Grid>
    
    </>
  )
}
