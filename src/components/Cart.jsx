import { useRecoilState } from "recoil"
import { cartState } from "../cartState"

function Cart() {
  const [cart, setCart] = useRecoilState(cartState)

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    )
  }

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div>
      <h3>Cart</h3>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => decrease(item.id)}>-</button>
          {item.qty}
          <button onClick={() => increase(item.id)}>+</button>
        </div>
      ))}

      <h4>Total: ${total}</h4>
    </div>
  )
}

export default Cart