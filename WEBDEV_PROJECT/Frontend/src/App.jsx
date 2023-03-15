import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ShoppingCart from "./pages/ShoppingCart";
import PaySuccess from "./pages/PaySuccess";
import ProductListAll from "./pages/ProductListAll";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = user ? user.isAdmin :false;
  console.log(admin)


  return(
     <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/signup" /> } />
        <Route path="/signup" element={ user ? <Navigate to="/" /> : <SignUp /> } />
        <Route path="/products/:category" element={user ?<ProductList /> : <Navigate to="/signin" />} />
        <Route path="/products/" element={user ?<ProductListAll /> : <Navigate to="/signin" />} />
        <Route path="/product/:id" element={user ? <SingleProduct /> : <Navigate to="/signin" /> } />
        <Route path="/cart" element={user ?<ShoppingCart />: <Navigate to="/signin" />} />
        <Route path="/profile/:username" element={user ?<Profile />: <Navigate to="/signin" />} />
        <Route path="/signin" element={ !user ? <SignIn/> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;