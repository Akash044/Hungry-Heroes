import { createContext, useState } from "react";
import Home from "./components/HomePage/Home";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={[cart, setCart]}>
      <Router>
        <div className="bg-violet-300">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
