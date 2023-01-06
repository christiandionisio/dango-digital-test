
import { GeneralLayout } from '../components/layouts/GeneralLayout'
import { IProduct } from '../interfaces/product'
import { ProductList } from '../components/products/ProductList'
import { CartProducts } from '../components/cart/CartProducts'

const products: IProduct[] = [
  {
    _id: "1", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "2", 
    title: "Tourmaline & Argon Oil Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "3", 
    title: "Tourmaline & Tea Tree Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "4", 
    title: "Tourmaline & Unscented Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "5", 
    title: "Tourmaline & Tea Tree 2 Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "6", 
    title: "Tourmaline & Unscented 2 Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "7", 
    title: "Tourmaline & Eucalyptus 2 Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.shopify.com/s/files/1/0272/4714/9155/products/aactaril-soap_1200x1200.jpg?v=1622098133",
    price: 12.00,
    quantity: 0
  }
]

export default function Home() {
  return (
    <GeneralLayout title='Test'>
      <>
        <ProductList products={products} />
        <CartProducts />
      </>
    </GeneralLayout>
  )
}
