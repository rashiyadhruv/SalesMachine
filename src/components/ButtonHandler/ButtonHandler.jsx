/* importing scss and react libraries needed */
import "./ButtonHandler.scss";
import React from "react";

/* importing assets needed */
import videocall from "../../assets/images/videocall.svg";
import schedule from "../../assets/images/schedule.svg";
import message from "../../assets/images/message.svg";
import chatbox from "../../assets/images/chat.svg";

/* making the main functional component buttonHandler */
const ButtonHandler = (props) => {
  return (
    <div className="buttonhandler">
      <div className="buttonhandler-buttons videocall">
        {/* calling TabAdder function on click on the imaging denoting the respective, passing the tab name as the parameter 
        for 4 such buttons  */}
        <img
          src={videocall}
          alt="videocall"
          onClick={() => props.TabAdder("videocall")}
        />
      </div>
      <div className="buttonhandler-buttons schedule">
        <img
          src={schedule}
          alt="schedule"
          onClick={() => props.TabAdder("schedule")}
        />
      </div>
      <div className="buttonhandler-buttons message">
        <img
          src={message}
          alt="message"
          onClick={() => props.TabAdder("message")}
        />
      </div>
      <div className="buttonhandler-buttons chat">
        <img
          src={chatbox}
          alt="chat"
          onClick={() => props.TabAdder("chatbox")}
        />
      </div>
    </div>
  );
};

export default ButtonHandler;
