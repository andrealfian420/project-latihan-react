import React from "react";

import Rainbow from "../hoc/Rainbow";

function Contact(props) {
  return (
    <div className="container">
      <h4 className="center">Halo, ini halaman contact</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia odit
        obcaecati magnam dolore vero! Saepe aliquam ex quia placeat. Architecto
        aliquid soluta excepturi obcaecati dolores quia doloremque ea nemo
        libero. Doloribus qui nam accusamus ipsum?
      </p>
    </div>
  );
}

export default Rainbow(Contact);
