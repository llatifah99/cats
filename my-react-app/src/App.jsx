import React from "react";
import bg from "./assets/bg.jpg";

function App({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
}

export default App;
