import React from 'react'

export default function Chat({ contact,dataContact }) {

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

function NoMessageResponse(){
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

function MessageResponse({contact, dataContact}) {
  console.log(dataContact);
  return (
    <div>
      <div className="history-message-rell">
        <div className="card-me">
          <img src="/assets/img/Rectangle 10.png" alt="" />
          <p>Hello lisa, today i'll eat you at your badroom.</p>
        </div>
        <div className="card-other">
          <img src="/assets/img/Rectangle 10.png" alt="" />
          <p>Hello lisa, today i'll eat you at your badroom.</p>
        </div>
      </div>
      <div className="sender-message-input">
        <input type="text" placeholder="Send Message" />
      </div>
    </div>
  );
}
