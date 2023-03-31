import React from "react";
import "../styles/Navbar.scss"
import Chamcong from "./ChamcongNavbar";
import Listusers from "./Listusers";


class Navbar extends React.Component {
    HandleChangeShow = (numberr) => {
        this.props.HandleChangeShow(numberr);
    }


    render() {
        return (
            <div id="navBar">
                <Chamcong HandleChangeShow={this.HandleChangeShow} />
                <Listusers HandleChangeShow={this.HandleChangeShow} />
            </div>
        )
    }
}

export default Navbar;