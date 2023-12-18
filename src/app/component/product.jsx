"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";

const Product = ({ productData }) => {
  const [products, setProductData] = useState(productData);
  const handleRemove = (productId) => {
    const newProduct = products.filter((prod) => prod.name !== productId);
    setProductData(newProduct);
  };

  const calculateTotal = () => {
    const totalPrice = products.reduce((acc, product) => {
      const priceWithoutDollar = parseFloat(
        product.price.replace("$", "").replace(",", "")
      );
      return acc + priceWithoutDollar;
    }, 0);

    return totalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <p className={styles.items}>{products.length} Items</p>
        {products.map((product, id) => {
          const { image, name, cat, quantity, price } = product;
          return (
            <div className={styles.container} key={id}>
              <div className={styles.productName}>
                <Image src={image} width="76" height="76" />
                <div>
                  <h6>{name}</h6>
                  <p>{cat}</p>
                </div>
              </div>
              <p>{quantity}</p>
              <h3>{price}</h3>
              <button onClick={() => handleRemove(name)}>Remove</button>
            </div>
          );
        })}

        <div className={styles.totalWrapper}>
          <div className={styles.total}>
            <p>Subtotal</p>
            <h6>$2104,54</h6>
          </div>
          <div className={styles.total}>
            <p>Shipping</p>
            <h6>$0</h6>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <h6>{calculateTotal()}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
