import React from "react";

export default function Chat({ contact, dataContact }) {
  return (
    <>
      {contact ? (
        <MessageResponse contact={contact} dataContact={dataContact} />
      ) : (
        <NoMessageResponse />
      )}
    </>
  );
}

function NoMessageResponse() {
  return (
    <>
      <div className="history-message-rell">
        <div className="no-message-status">
          <h1>No Message</h1>
        </div>
      </div>
    </>
  );
}

function MessageResponse({ contact, dataContact }) {
  return (
    <div>
      <div className="history-message-rell">
        {dataContact.map((msgItem) => {
          if (msgItem.idSender === 2) {
            return (
              <div className="card-other">
                <p className="time-message-rell">23:13</p>
                <p>{msgItem.message}</p>
              </div>
            );
          } else if (msgItem.idSender === 4) {
            return (
              <div className="card-me">
                <img src="/assets/img/Rectangle 10.png" alt="" />
                <p>{msgItem.message}</p>
                <p className="time-message-rell">23:13</p>
              </div>
            );
          }
        })}
      </div>
      <div className="sender-message-input">
        <input type="text" placeholder="Send Message" />
      </div>
    </div>
  );
}
