import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext';

export const CartList = () => {

    const {cart} = useContext(CartContext);

  return (cart.length === 0) ? 
    (<Typography>You must add products to cart</Typography>) 
    : (
    <>
        {
            cart.map(product => (
                <Grid container spacing={2} key={product._id} sx={{mb:1}}>
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1' >{product.title}</Typography>
                                <Typography variant='h6'>x{product.quantity} products</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>${product.price}</Typography>
                        </Grid>
                    </Grid>
            ))
        }
    </>
  )
}
