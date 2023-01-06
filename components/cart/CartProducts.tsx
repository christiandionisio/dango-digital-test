import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { CartList } from './CartList'
import { OrderSummary } from './OrderSummary'

export const CartProducts = () => {
  return (
    <>
        <Typography variant='h4' sx={{mt: 10, mb: 2}}>
            Order Summary
        </Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='summary-card'> 
                    <CardContent>
                        <Typography variant='h4'>Order</Typography>
                        <Divider sx={{my:1}} />
                        
                        <OrderSummary />

                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </>
  )
}
