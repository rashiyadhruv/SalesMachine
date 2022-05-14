/* importing scss and react libraries needed */
import "./ContentHandler.scss";
import React from "react";

/* importing assets needed */
import emptyworkspace from "../../assets/images/emptyworkspace.svg";

/* making the main functional component ContentHandler */
const ContentHandler = (props) => {
  return (
    <>
      {/* -1 of currtab shows that there are no tabs to show, while any other tab type will provide with information to be shown
       using currtab and tabs react states*/}
      {props.CurrTab === -1 ? (
        <div className="notabs">
          <img src={emptyworkspace} alt="emptyworkspace" />{" "}
        </div>
      ) : (
        <div className="contenthandler">
          <div className="contenthandler-top">{props.Tabs[props.CurrTab]}</div>
          <div className="contenthandler-bottom">
            <p>
              Here I only bifurgated the tabs into 4 types but we can add more,
              also we can even add subtypes to them like have a specific mail
              open in one tab, for this we will store an object into the Tabs
              array element instead of just a string into the.
            </p>
            Lorem ipsum dolor sit amet consectetur,adipisicing elit. Numquam
            laboriosam rerum sed non consequuntur est cum eaque, a ad adipisci
            et quasi veritatis omnis impedit commodi, repellendus fugiat sequi
            suscipit.
          </div>
          <div className="contenthandler-spacer"></div>
        </div>
      )}
    </>
  );
};

export default ContentHandler;
