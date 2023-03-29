import React from "react";
import "../styles/Chamcong.scss"



class Chamcong extends React.Component {
    clickinto = (nub) => {
        this.props.HandleChangeShow(nub)

    }

    render() {
        return (
            <>
                <button className="nav-btn" onClick={() => this.clickinto(2)}>CHẤM CÔNG</button>
            </>
        )
    }
}
export default Chamcong;