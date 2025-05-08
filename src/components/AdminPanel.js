import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, setProducts }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price)
    };
    setProducts([...products, newProduct]);
    setFormData({ name: "", description: "", image: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const editPrice = (id, newPrice) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, price: Number(newPrice) } : p
      )
    );
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <div>
        <input
          className="form-control"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <input
          className="form-control"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
        />
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <div className="col-12">
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="row">
                <div className="col">{product.name}</div>
                <div className="col">{product.description}</div>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    value={product.price}
                    onChange={(e) => editPrice(product.id, e.target.value)}
                  />
                </div>
              </div>
            </Link>
            <button className="float-right" onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;


