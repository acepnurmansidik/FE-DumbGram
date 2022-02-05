import React from "react";
import NoImageProfile from "../NoImageProfile/NoImageProfile";

export default function ImageProfile({ image }) {
  return (
    <>
      {image !== null ? (
        <img
          src={`http://localhost:5000/uploads/${image}`}
          alt=""
          width={180}
          height={180}
        />
      ) : (
        <NoImageProfile className="text-pointer" />
      )}
    </>
  );
}
