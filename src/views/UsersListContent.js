import React from "react";
import "../styles/UsersList_content.scss";
import UserListTableContent from "./UserListTableContent";
import UserListInputContent from "./UserListInputContent";

class UsersListContent extends React.Component {
  state = {
    list: true,
  };

  Handlechangeinput = (event) => {
    this.setState({
      list: !this.state.list,
    });
  };

  render() {
    let { list } = this.state;
    return (
      <>
        {list === true ? (
          <div className="UsersList_content">
            <UserListTableContent Handlechangeinput={this.Handlechangeinput} />
          </div>
        ) : (
          <div id="form">
            <UserListInputContent Handlechangeinput={this.Handlechangeinput} />
          </div>
        )}
      </>
    );
  }
}
export default UsersListContent;
