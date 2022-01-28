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
            contact?.idReceiver === dateItem?.idReceiver && "contact-active"
          }`}
        >
          <div className="dd-card-img">
            <img src={`/assets/img/${dateItem.user.image}`} alt="" />
          </div>
          <div className="card-info-people">
            <div className="mt-3">{dateItem.user.fullname}</div>
            <p>{dateItem.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}
