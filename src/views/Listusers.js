import React from "react";
import "../styles/Listusers.scss"



class Listusers extends React.Component {
    clickinto = (nub) => {
        this.props.HandleChangeShow(nub)
    }

    render() {
        return (
            <>
                <button className="nav-btn-Listusers" onClick={() => this.clickinto(3)}>USER LIST</button>
            </>
        )
    }
}
export default Listusers;