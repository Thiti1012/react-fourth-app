import React from "react";
import ProductHeader from "../components/ProductHeader";
export default function Smartphone() {
  return (
    <div>
      <a href="/product" style={{ textDecoration: "none"}}>
        <ProductHeader />
      </a>

      <h2 style={{ textAlign: "center", color: "#ff0000" }}>Smartphone Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae
        modi, explicabo dolorem sit repellat dolores necessitatibus aspernatur
        mollitia quae pariatur corporis minus tempora expedita perferendis nisi
        natus iusto voluptas quibusdam. Nostrum voluptatibus ducimus minus vel
        voluptas corporis ea, laudantium amet rem rerum consectetur quod
        voluptatem minima velit magni sit?
      </p>
    </div>
  );
}
