import React from "react";

export default function CardMessagePeoples(props) {
  const { titleName, message, thumbnail } = props;
  return (
    <>
      <div className="card-message-peoples">
        <div className="dd-card-img">
          <img src={`/assets/img/${thumbnail}`} alt="" />
        </div>
        <div className="card-info-people">
          <label for="" className="mt-3">
            {titleName}
          </label>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}
