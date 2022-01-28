import React from "react";

export default function CardMessagePeoples({ dataContact, setContact, contact }) {
  const clickContact = (id) => {
    const data = dataContact.find((dateItem) => dateItem.id === id);
    setContact(data);
  };
  return (
    <>
      {dataContact.map((dateItem, index) => (
        <div
          key={index}
          onClick={() => clickContact(dateItem.id)}
          className={`card-message-peoples ${
            contact?.id === dateItem?.id && "contact-active"
          }`}
        >
          <div className="dd-card-img">
            <img src={`/assets/img/${dateItem.thumbnail}`} alt="" />
          </div>
          <div className="card-info-people">
            <div className="mt-3">
              {dateItem.titleName}
            </div>
            <p>{dateItem.chat}</p>
          </div>
        </div>
      ))}
    </>
  );
}
