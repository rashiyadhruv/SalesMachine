/* importing scss and react libraries needed */
import "./TabsHandler.scss";
import React from "react";

/* importing assets needed */
import close from "../../assets/images/close.svg";

/* making the main functional component TabsHandler */
const TabsHandler = (props) => {
  /* function that sets the value of CurrTab state which shows the curretly active tab as the indexth entry in the Tabs state
   which contains data of all the tabs open. */
  const ChangeCurrentTab = (index) => {
    props.setCurrTab(index);
  };

  /* function that deletes the tab at the idxth index in the Tabs state which contains data of all the tabs open, 
  while updating the CurrTab state, depending on the situations in the form of if else nesting */
  const TabRemover = (idx) => {
    /* removes the idxth element from tabs state */
    let tabs = [...props.Tabs];
    tabs.splice(idx, 1);
    props.setTabs(tabs);

    /* if the idxth element is not the current active tab and in the array idxth element comes before currtab, 
    then the current active tab is set to the previous tab-1 */
    if (props.CurrTab > idx) {
      console.log("currtab", props.CurrTab);
      props.setCurrTab(props.CurrTab - 1);
    }

    if (props.CurrTab === idx) {
      /* if the idxth element is the current active tab and is the last element in the array Tabs then set currTab to -1 to show,
       empty workspace page */
      if (props.CurrTab === 0 && props.Tabs.length === 1) {
        props.setCurrTab(-1);

        /* if the idxth element is the current active tab and is the first element in the array while not being the last element 
        ,then set currTab to next tab or in simpler way to => 0 */
      } else if (props.CurrTab === 0) {
        props.setCurrTab(0);

        /* if the idxth element is the current active tab and is not the fist or last element in the array Tabs then set currTab to
         next tab*/
      } else {
        props.setCurrTab(props.CurrTab - 1);
      }
    }
  };

  return (
    <div className="tabshandler">
      {/* mapping through the Tabs state to display all the tabs open */}
      {props.Tabs.map((tab, index) => {
        return (
          <>
            {/* if the current active tab is the idxth element in the array Tabs then display the 
            tab as active(in different background shade using conditional statments to change classes ) */}
            <div
              className={
                props.CurrTab === index
                  ? "tabshandler-tab"
                  : "tabshandler-tab greyed"
              }
              key={index}
            >
              {/* if a non active tab is clicked then the onclick ChangeCurrentTab() is called,setting the clicked tab as active */}
              <div
                className="tabshandler-tab-text"
                onClick={() => ChangeCurrentTab(index)}
              >
                {tab}
              </div>

              {/* for any open tab in the array displayed,when the close is clicked, TabRemover is called which removes the tab and 
              passes on the active state to the next fit candidte using if else nesting  */}
              <div className="tabshandler-tab-remove">
                <img
                  src={close}
                  alt="close"
                  onClick={() => TabRemover(index)}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TabsHandler;
