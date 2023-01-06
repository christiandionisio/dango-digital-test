import { Box, Button, Card, CardContent, CardMedia, Grid, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { FC, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart/CartContext';
import { IProduct } from '../../interfaces/product'
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({product}) => {

    const [quantity, setQuantity] = useState(0);
    const [title, setTitle] = useState(product.title);
    const [titleLabelSize, settitleLabelSize] = useState(17);
    const [value, setValue] = React.useState<number>(30);

    const {addProductToCart} = useContext(CartContext);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const [tempCartProduct, setTempCartProduct] = useState<IProduct>({
      _id: product._id,
      image: product.image,
      price: product.price,
      title: product.title,
      quantity: 0,
    });

    const onAddProduct = () => {
      if (!tempCartProduct) return;
      if (quantity === 0) return; 

      setQuantity(0);
      
      addProductToCart(tempCartProduct);
    }

    useEffect(() => {
      setTempCartProduct({
        ...tempCartProduct,
        quantity
      });
    }, [quantity])
    

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
                    onChange={(event) => setQuantity((Number(event.target.value) < 0) ? 0 : Number(event.target.value))}
                  />
                </Grid>
              </Grid>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <Button variant='contained' sx={{mb: 1}} fullWidth onClick={onAddProduct}>Add to cart</Button>
            <Button  sx={{mb: 1}} fullWidth>Learn More</Button>
            <TextField fullWidth 
                label="Title Edit" 
                id="titleEdit"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                sx={{mb: 2}} 
            />

            <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Title label Size Edit</Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <TextDecreaseIcon />
                <Slider 
                  min={5}
                  max={30}
                  aria-label="Title label Size Edit" 
                  valueLabelDisplay="auto" 
                  value={titleLabelSize}
                  onChange={(_, value) => settitleLabelSize(value as number)}
                />
                <TextIncreaseIcon />
              </Stack>
          </Card>
        </Grid>
  )
}
