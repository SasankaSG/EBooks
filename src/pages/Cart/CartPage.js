import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useTitles } from "../../hooks/useTitles";

export const CartPage = () => {
    const { cartList } = useCart();

    useTitles(`Cart (${cartList.length}) `);


  return (
    <main>
        { cartList.length ? <CartList /> : <CartEmpty />}

    </main>
  )
}
