import storeItems from "./items.json"
import Store from "./components/Store"
import Cart from "./components/Cart"
import 'react-toastify/dist/ReactToastify.min.css';
import { useCart } from "./context/CartContext"
import Login from "./components/Login"
import { ToastContainer } from "react-toastify"
import Routing from "./components/Routes";
function App() {
  const { isAuth } = useCart()

  return (
    <>
      {/* {isAuth ? (<><Store items={storeItems} /> <Cart /></>) : <Login />} */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routing />
    </>
  )
}

export default App
