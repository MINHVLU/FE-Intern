import React from "react";
import "../styles/UserList_Input_content.scss"



class UserList_Input_content extends React.Component {
    onlcickCancle = (even) => {
        this.props.Handlechangeinput()
    }

    render() {
        return (
            <>
                <div className="UserList_Input_content">
                    <form>

                        <div class="container">
                            <h1>ADD USER</h1>
                            <p>Please fill in this form to add a user.</p>
                            <label for="name"><b>NAME</b></label>
                            <input type="text" placeholder="Enter Name" name="uname" required />

                            <label for="email"><b>EMAIL</b></label>
                            <input type="text" placeholder="Enter Email" name="uemail" required />

                            <label for="phone"><b>PHONE NUMBER</b></label>
                            <input type="text" placeholder="Enter Email" name="uphone" required />

                            <label for="pottion"><b>POSITION</b></label>
                            <input type="text" placeholder="Enter Password" name="uposition" required />

                            <label for="location"><b>LOCATION</b></label>
                            <input type="text" placeholder="Enter LOCATION" name="ulocation" required />

                            <label for="role"><b>ROLE</b></label>
                            <input type="text" placeholder="Enter ROLE" name="urole" required />

                            <label for="usename"><b>USENAME</b></label>
                            <input type="text" placeholder="Enter UseName" name="uusename" required />

                            <label for="password"><b>PASSWORD</b></label>
                            <input type="password" placeholder="Enter Password" name="upassword" required />


                            <div class="clearfix">
                                <button type="button" class="cancelbtn" onClick={() => this.onlcickCancle()}>Cancel</button>
                                <button type="submit" class="signupbtn" onClick={() => this.onlcickCancle()}>Sign Up</button>
                            </div>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}
export default UserList_Input_content;