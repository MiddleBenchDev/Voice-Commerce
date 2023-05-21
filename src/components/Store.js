import ImageSlider from "./ImageSlider"
import StoreItem from "./StoreItem"
import useAlan from "../hooks/useAlan";
import items from '../items.json';
import Cart from "../components/Cart"
import Modal from "react-modal";
import { useCart } from "../context/CartContext";
import formatCurrency from "../util/formatCurrency";
import CartItem from "./CartItem";
export default function Store() {
  useAlan()
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/JCZjbZK/banner-removebg-preview.png",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://i.ibb.co/JCZjbZK/banner-removebg-preview.png",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "https://i.ibb.co/JCZjbZK/banner-removebg-preview.png",
      alt: "Image 3",
    },
  ];
  const { setVisible, visible, temp } = useCart()

  return (
    <section className="text-gray-700 body-font">

      <div className="container px-5 py-24 mx-auto">
        <ImageSlider images={images} />
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
          <Cart />
        </div>
      </div>
      <Modal isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          },
          content: {
            // margin: "8px",
            padding: "0",
            inset: "auto",
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }
        }}
      >
        <div style={{ height: 250, width: 500, padding: 20 }}>
          <h2 style={{ fontWeight: 800, textAlign: "center" }}>Thank you, for your order</h2>
          <img style={{ objectFit: "fill", margin: "0 auto", padding: 8 }} src="https://i.ibb.co/smRBndN/order-confirmation-loop-2.gif" alt="order-confirm-gif" width={125} height={125} />

          <marquee><p style={{ fontWeight: 400 }}>You will receive your products in two or three days...</p></marquee>
        </div>
      </Modal>
    </section>
  )
}
