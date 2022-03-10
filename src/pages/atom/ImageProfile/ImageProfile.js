import React from "react";
import NoImageProfile from "../NoImageProfile/NoImageProfile";

export default function ImageProfile({ image }) {
  return (
    <>
      {image !== null ? (
        <img
          src={`https://dumbgram-app.herokuapp.com/uploads/${image}`}
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
