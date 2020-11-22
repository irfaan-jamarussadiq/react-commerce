import React from "react";
import bed from "./images/bedroom.jpg";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["white", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
            <div class="section active" id="section0">
                <div class="intro-container">
                    <h1>Welcome!</h1>
                </div>
            </div>
            <div class="section active" id="section1"></div>
            <div class="section active" id="section2"></div>
        </div>
      );
    }}
  />
);

class Page extends React.Component {
    render() {
        return (
            <div className="Page">
                <FullpageWrapper />
            </div>
        );
    }
}

export default Page;