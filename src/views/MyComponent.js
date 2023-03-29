import React from "react";
// import ChildComponent from "./ChildComponent";
// import AddComponent from "./AddComponent";

import Navbar from "./Navbar.js";
import Infor from "./Infor.js";
import Content from "./Content.js";


class MyComponent extends React.Component {
    state = {
        ArrJob: [
            { id: '1', name: "Minh", gioitinh: "Nam" },
            { id: '2', name: "Minh", gioitinh: "nữ" },
            { id: '1', name: "Minh", gioitinh: "nữ" }
        ],
        show: "index",
        Female: true
    }


    // addNewJob = (job) => {
    //     this.setState({
    //         ArrJob: [...this.state.ArrJob, job]
    //     }
    //     )
    // }

    // deleteJob = (job) => {
    //     let temp = this.state.ArrJob;
    //     temp = temp.filter(item => item.id !== job.id);
    //     this.setState({
    //         ArrJob: temp
    //     })
    // }
    // handleon = (event) => {
    //     this.setState({
    //         show: !(this.state.show)
    //     }
    //     )
    // }

    changesex = (event) => {
        this.setState({
            Female: !(this.state.sex)
        })
    }

    HandleChangeShow = (nber) => {
        if (nber === 1) {
            this.setState({
                show: "index"
            })
            console.log(this.state.show);
        } else if (nber === 2) {
            this.setState({
                show: "chamcong"
            })
            console.log(this.state.show);
        } else if (nber === 3) {
            this.setState({
                show: "userlist"
            })
            console.log(this.state.show);
        }

    }

    render() {
        let show = this.state.show;
        console.log(show)
        return (
            <>
                {/* {show === true ?
                    <>
                        <div><button className="Btn_sh" onClick={this.handleon}>SHOW</button></div>
                        <AddComponent addNewJob={this.addNewJob} />
                    </>
                    :
                    <>
                        <div><button className="Btn_sh1" onClick={this.handleon}>HIDE</button></div>
                        <ChildComponent
                            ArrJob={this.state.ArrJob}
                            deleteJob={this.deleteJob}
                        />
                    </>
                } */}


                <Navbar HandleChangeShow={this.HandleChangeShow} />
                <Infor />
                <Content show={this.state.show} />




            </>
        )
    }
}
export default MyComponent;