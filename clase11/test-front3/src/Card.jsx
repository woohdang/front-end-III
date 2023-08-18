import React from "react";

const Card = ({ banda, genero }) => {
    return (
      <div className="card">
        <h2>Banda ingresada ✅</h2>
        <p>{banda}</p>
        <p>{genero}</p>
      </div>
    );
  };
  
  export default Card;