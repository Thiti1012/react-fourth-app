import React from "react";

export default function NavBarMain() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(255, 0, 0)",
        color: "white",
        padding: "15px",
        marginBottom: "20px",
        gap: "10px",
      }}
    >
        <a href="/" style={{ color: "white", textDecoration: "none", margin: "0 10px" , fontWeight: "bold"}}>
          Home
        </a>
        <a href="/about" style={{ color: "white", textDecoration: "none", margin: "0 10px" , fontWeight: "bold"}}>
          About
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none", margin: "0 10px" , fontWeight: "bold"}}>
          Contact
        </a>
        <a href="/product" style={{ color: "white", textDecoration: "none", margin: "0 10px" , fontWeight: "bold"}}>
          Product
        </a>
    </div>
  );
}
