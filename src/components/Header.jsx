import React from "react";

export default function Header() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ff0000" }}>
        Welcome to IoT WEB
      </h1>
      <hr
        style={{
          textAlign: "center",
          border: "non",
          height: "2px",
          backgroundColor: "#070707",
          width: "80%",
          margin: "50px auto",
        }}
      ></hr>
    </div>
  );
}
