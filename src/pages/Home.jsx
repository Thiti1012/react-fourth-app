import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBarMain from "../components/NavBarMain";
export default function Home() {
  return (
    <div>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "#ff0000" }}>Home Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae
        modi, explicabo dolorem sit repellat dolores necessitatibus aspernatur
        mollitia quae pariatur corporis minus tempora expedita perferendis nisi
        natus iusto voluptas quibusdam. Nostrum voluptatibus ducimus minus vel
        voluptas corporis ea, laudantium amet rem rerum consectetur quod
        voluptatem minima velit magni sit?
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <img src="super.png" alt="super" style={{ width: "100px" }} />
      </div>
      <Footer />
    </div>
  );
}
