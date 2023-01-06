import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { FC, useState } from 'react'
import { IProduct } from '../../interfaces/product'

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({product}) => {

    const [quantity, setQuantity] = useState(product.quantity);
    const [title, setTitle] = useState(product.title);
    const [titleLabelSize, settitleLabelSize] = useState(17);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ pl: 2.5, pr: 2.5, pt: 4, pb: 4 }}>
            <CardMedia
              component="img"
              alt={product.title}
              height="140"
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" 
                component="div" 
                sx={{fontSize: titleLabelSize, fontWeight: 700}}
              >
                {title}
              </Typography>

              
              <Grid container spacing={2} sx={{mt: 2, mb: 1, alignItems: 'center'}}>
                <Grid item>
                <Typography gutterBottom variant="h6" 
                  component="div" 
                  sx={{fontSize: 15, fontWeight: 600}}
                >
                  ${product.price}
                </Typography>
                </Grid>

                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                  <TextField
                    size='small'
                    id="outlined-number"
                    label="Qty"
                    type="number"
                    sx={{width: 100}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                  />
                </Grid>
              </Grid>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <Button variant='contained' sx={{mb: 1}} fullWidth>Add to cart</Button>
            <Button  sx={{mb: 1}} fullWidth>Learn More</Button>
            <TextField fullWidth 
                label="Title Edit" 
                id="titleEdit"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                sx={{mb: 2}} 
            />
            <TextField fullWidth 
                label="Title Label Size Edit" 
                id="titleLabelSizeEdit"
                type="number"
                value={titleLabelSize}
                onChange={(event) => settitleLabelSize(Number(event.target.value))} 
            />
          </Card>
        </Grid>
  )
}
