import { useRecoilState } from "recoil"
import { cartState } from "../cartState"

const products = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 },
  { id: 3, name: "Orange", price: 7 }
]

function ProductList() {
  const [cart, setCart] = useRecoilState(cartState)

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id)

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  return (
    <div>
      <h3>Products</h3>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList