import React from "react";
import "../styles/Content.scss"
import ChamcongContent from "./ChamcongContent";
import UsersListContent from "./UsersListContent";

class Content extends React.Component {


    render() {
        let show = this.props.show;
        return (
            <div className="content">
                <>
                    {(show === "chamcong") ?
                        <ChamcongContent />
                        : (show === "userlist") ?
                            <UsersListContent />
                            :
                            <></>

                    }



                </>
            </div>
        )
    }
}
export default Content;