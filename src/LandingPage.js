import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class LandingPage extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="LandingPage">
                <div class="landing-container">
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <h2 class="company-name">HomeCraft</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LandingPage;