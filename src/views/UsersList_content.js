import React from "react";
import "../styles/UsersList_content.scss"
import UserList_Table_content from "./UserList_Table_content";
import UserList_Input_content from "./UserList_Input_content";

class UsersList_content extends React.Component {
    state = {
        list: true
    }

    Handlechangeinput = (event) => {
        this.setState({
            list: !(this.state.list)
        })
    }

    render() {
        let { list } = this.state
        return (
            <>
                {list === true ?
                    <div className="UsersList_content">
                        <UserList_Table_content Handlechangeinput={this.Handlechangeinput} />
                    </div>
                    :
                    <div id="form">
                        <UserList_Input_content Handlechangeinput={this.Handlechangeinput} />
                    </div>
                }



            </>
        )
    }
}
export default UsersList_content;