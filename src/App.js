import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/chekout" element={<Checkout/>}/>
          <Route path="*" element={<h2>404 not found</h2>}/>
        </Routes>
        </CartProvider>


      </BrowserRouter>
    </div>

  )
}
export default App;