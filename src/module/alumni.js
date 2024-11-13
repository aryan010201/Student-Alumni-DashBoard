import React from "react";
import './css/alumni.css'
import { Link } from "react-router-dom";

class Alumni extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectF: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (event) => {
        const selectedValue = event.target.value;
        this.setState({ selectF: selectedValue }, () => {
            console.log(this.state.selectF);
        });
    };

    render() {
        return (
            <div id="main-A" className="">
                <nav className="navbar-a">
                    <ul className="left">
                        <li className="head-a ">HOME</li>
                        <li className="head-a ">MENTORING</li>
                        <li className="head-a ">OPPORTUNITY</li>
                        <li className="head-s "><Link className="pink" to="/event">EVENT</Link></li>
                        <li className="head-s "><Link className="pink" to="/news">NEWS</Link></li>
                    </ul>
                    <div className="profile-data">
                        <h3 className="profile-id">Alumni Id</h3>
                        <svg className="chat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000" >
                            <path d="M12 3C6.48 3 2 6.91 2 11.5c0 2.21 1.11 4.18 2.93 5.6-.05.42-.1 1.04-.16 1.83-.1 1.29-.2 2.41-.32 3.07a.5.5 0 00.75.47c.48-.25 1.19-.63 2.13-1.14 1.6-.86 2.16-.94 2.56-.94.57 0 1.16.06 1.76.06 5.52 0 10-3.91 10-8.5S17.52 3 12 3zM4 11.5C4 7.91 7.58 5 12 5s8 2.91 8 6.5-3.58 6.5-8 6.5c-.55 0-1.09-.03-1.61-.1-.25-.04-.51-.04-.75 0-.34.04-.92.15-2.48.89-.34.16-.75.37-1.25.62.1-.89.18-1.77.23-2.57.07-1.04.15-1.64.23-1.92a.5.5 0 00-.22-.52C4.78 15.16 4 13.38 4 11.5z"/>
                        </svg>
                        <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                </nav>

                <div className="modal-container">
                    <div className="modal-1">
                        <h1 className="gradient-text">Post Jobs <br/> And Opportunities</h1>
                        <p>Post new jobs or internships for students, contribute to their career growth and help them gain experience through your guidance.</p>

                        <button className="btn-a">Post Job</button>
                    </div>
                    <div className="modal-2">
                        <h1 className="gradient-text">Donate For Scholarships/ Infrastructure</h1>
                        <p>Help The Students Which are Having Problem In Affording Fees or Donate To college For Improving Infrastructure </p>
                        
    

                        <button className="btn-a">Offer Mentorship</button>
                    </div>
                    <div className="modal-3">
                        <h1 className="gradient-text">Check Messages</h1>
                        <p>Check Are There Any Studets Who Are Seeking Mentorship From You</p>
                        <button className="btn-a">5 New Chats</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alumni;