import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  const myCart = useSelector((state) => state.myCart.showCart);

  return (
    <Layout>
      {myCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
