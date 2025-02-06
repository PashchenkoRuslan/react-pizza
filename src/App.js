import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";

export const SearchContext = React.createContext();
// import pizzas from './pizzas.json';

function App() {
  const [searchItems, setSearchItems] = React.useState("");

  return (
    <div className="App">
      <div>
        <div className="wrapper">
          <SearchContext.Provider value={{ searchItems, setSearchItems }}>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </div>
          </SearchContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
