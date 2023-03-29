import React from "react";
import "../styles/Content.scss"
import Chamcong_content from "./Chamcong_content";
import UsersList_content from "./UsersList_content";

class Content extends React.Component {


    render() {
        let show = this.props.show;
        return (
            <div className="content">
                <>
                    {(show === "chamcong") ?
                        <Chamcong_content />
                        : (show === "userlist") ?
                            <UsersList_content />
                            :
                            <></>

                    }



                </>
            </div>
        )
    }
}
export default Content;