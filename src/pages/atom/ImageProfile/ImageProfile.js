import React from "react";

export default function ImageProfile({ image }) {
  return (
    <>
      <img
        src={`http://localhost:5000/uploads/${image}`}
        alt=""
        width={180}
        height={180}
      />
    </>
  );
}
