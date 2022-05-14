/* importing scss and react libraries needed */
import "./Hero.scss";
import React, { useState } from "react";

/* importing reuseable components */
import TabsHandler from "../../components/TabsHandler/TabsHandler";
import ContentHandler from "../../components/ContentHandler/ContentHandler";
import ButtonHandler from "../../components/ButtonHandler/ButtonHandler";

/* importing assets needed */
import contactinfo from "../../assets/images/contactinfo.svg";
import activity from "../../assets/images/activity.svg";

/* making the main functional component hero */
const Hero = (props) => {
  /* initializing states to be used in the hero section => 
  1) tabs : keeps data on all the tabs opened but not closed in the workspace
  2) CurrTab : keeps track of the tab that is active and whose data is to be shown on main content area  */
  const [Tabs, setTabs] = useState([]);
  const [CurrTab, setCurrTab] = useState(-1);

  /* function to add a new tab of any type "type" enter as parameter to the tabs array and setting this new tab as active instantly */
  const TabAdder = (type) => {
    setTabs((Tabs) => [...Tabs, type]);
    setCurrTab(Tabs.length);
  };

  return (
    /* basic structuring of whole hero section */
    <div className="hero">
      <div className="hero-navbar"></div>
      <div className="hero-content">
        <div className="hero-content-left">
          <div className="hero-content-left-top">
            <img src={contactinfo} alt="contactinfo" />
          </div>
          <div className="hero-content-left-bottom">
            {/* calling the ButtonHandler component where buttons to add the tabs are handled */}
            <ButtonHandler TabAdder={TabAdder} />
          </div>
        </div>
        <div className="hero-content-center">
          <div className="hero-content-center-top">
            {/* calling the TabsHandler component where tab deletion and presentation are handled */}
            <TabsHandler
              Tabs={Tabs}
              setTabs={setTabs}
              CurrTab={CurrTab}
              setCurrTab={setCurrTab}
            />
          </div>
          <div className="hero-content-center-content">
            {/* calling the ContentHandler component where the content of the tabs to be displayed are hold and handled */}
            <ContentHandler CurrTab={CurrTab} Tabs={Tabs} />
          </div>
        </div>
        <div className="hero-content-right">
          <img src={activity} alt="activity" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
