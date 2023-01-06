
import { GeneralLayout } from '../components/layouts/GeneralLayout'
import { IProduct } from '../interfaces/product'
import { ProductList } from '../components/products/ProductList'
import { CartProducts } from '../components/cart/CartProducts'

const products: IProduct[] = [
  {
    _id: "1", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "2", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "3", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "4", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "5", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "6", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
    price: 12.00,
    quantity: 0
  },
  {
    _id: "7", 
    title: "Tourmaline & Eucalyptus Bar Soap", 
    description: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    image: "https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg",
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
