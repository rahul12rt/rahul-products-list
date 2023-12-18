import Image from "next/image";
import styles from "./page.module.css";
import productData from "./product";
import Product from "./component/product";

export default function Home() {
  return <Product productData={productData} />;
}
