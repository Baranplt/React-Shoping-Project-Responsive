import Header from "./components/Header/Header";
import HeaderSup from "./components/Header/HeaderSup";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Details from './pages/Details'
import Contact from "./pages/Contact";
import '../src/App.css'
import Homes from './components/Main/Home'
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail";
import ProductContext from './Context/ProdcustContext'
import { useEffect, useState } from "react";
import axios from "axios";
import CartContext from './Context/CartContext'
import Cart from './components/Cart'
import AddBasketContext from "./Context/AddBasketContext";
import UserContext from "./Context/UserContext";
import Login from "./pages/Login";
function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState([])

  const updateCart = (par) => {
    setCart(par)
  }
  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data)
  }
  const getUser = async () => {
    const response = await axios.get('https://fakestoreapi.com/users');
    setUser(response.data)
  }
  useEffect(() => {
    getProducts()
    getUser()
  }, [])
  const addBasket = (found) => {
    const addFind = cart.find(item => item.id === found.id);
    if (addFind) {
      addFind.amount += 1;
      setCart([...cart.filter(item => item.id !== found.id), {
        id: found.id,
        title: found.title,
        price: found.price,
        image: found.image,
        amount: addFind.amount
      }])
    }
    else {
      setCart([...cart, {
        id: found.id,
        title: found.title,
        price: found.price,
        image: found.image,
        amount: 1
      }])
    }

  }

  return (
    <CartContext.Provider value={{ cart: cart, setCart: updateCart }}>
      <AddBasketContext.Provider value={addBasket} >
        <ProductContext.Provider value={products} className="">
          <UserContext.Provider value={user}>

            <div className="bg-regal-blue py-2 mb-2">
              <HeaderSup />
            </div>
            <div className="container">
              <Header />
              <Homes />
              <div >

                <Routes >
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/cart'} element={<Cart />} />
                  <Route path={'/details'} element={<Details />} />
                  <Route path={'/contact'} element={<Contact />} />
                  <Route path={'/productDetail/:id'} element={<ProductDetail />} />
                  <Route path={'login'} element={<Login />} />
                </Routes>
              </div>

            </div>
            <div className="bg-regal-blue ">
              <Footer />

            </div>
          </UserContext.Provider>
        </ProductContext.Provider>
      </AddBasketContext.Provider>


    </CartContext.Provider>
  );
}

export default App;
