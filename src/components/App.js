
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import initialProducts from "./data";

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <ProductList products={products} />
        </Route>
        <Route path="/products/:id">
          <ProductDetails products={products} />
        </Route>
        <Route path="/admin">
          <AdminPanel products={products} setProducts={setProducts} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

