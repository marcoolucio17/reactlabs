import React, { use, useState } from "react";
import { useFoxImage } from "../hooks/useFoxImage";
import { useDogImage } from "../hooks/useDogImage";

const LabHook = () => {
  const { image, loading: singleLoading, error: singleError } = useFoxImage();
  const { dogImage, loading: dogLoading, error: dogError } = useDogImage();

  return (
    <div style={{ display: "flex", gap: "10rem" }}>
      <div>
        <h1>random fox</h1>
        <img
          src={image}
          alt="Random Fox"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>
      <div>
        <h1>random dogg</h1>
        <img
          src={dogImage}
          alt="Random Dog"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default LabHook;
