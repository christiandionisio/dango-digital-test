import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext';

export const OrderSummary = () => {

    const {numberOfItems, total} = useContext(CartContext);

  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>Products Quantity</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{numberOfItems} products</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography variant="subtitle1">Total:</Typography>
        </Grid>
        <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent='end'>
            <Typography variant="subtitle1">${total}</Typography>
        </Grid>
    </Grid>
  )
}
