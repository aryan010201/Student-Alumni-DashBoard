import React from "react";
import './css/student.css';
import { Link } from "react-router-dom";




class Student extends React.Component{
    constructor(props){
        super(props);

        this.state={
            selectF:''
        };

        this.handleSelect = this.handleSelect.bind(this);

    }

    handleSelect = (event) => {
        const selectedValue = event.target.value;
        this.setState({ selectF: selectedValue }, () => {
            
            console.log(this.state.selectF);
        });
    };

    componentDidMount() {
        document.body.classList.add("student-body");
    }

    componentWillUnmount() {
        document.body.classList.remove("student-body");
    }


    render(){
        return (
        <div id="main" className="">

            <nav className="navbar-s">
                    <ul className="left">
                        <li className="head-s ">HOME</li>
                        <li className="head-s ">MENTORING</li>
                        <li className="head-s ">OPPORTUNITY</li>
                        <li className="head-s "><Link className="pink"to="/event">EVENT</Link></li>
                        <li className="head-s "><Link className="pink" to="/news">NEWS</Link></li>
                    </ul>
                    <div className="profile-data">
                        <h3  className="profile-id-s">Login Id</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF" className="chat-icon">
                                <path d="M12 3C6.48 3 2 6.91 2 11.5c0 2.21 1.11 4.18 2.93 5.6-.05.42-.1 1.04-.16 1.83-.1 1.29-.2 2.41-.32 3.07a.5.5 0 00.75.47c.48-.25 1.19-.63 2.13-1.14 1.6-.86 2.16-.94 2.56-.94.57 0 1.16.06 1.76.06 5.52 0 10-3.91 10-8.5S17.52 3 12 3zM4 11.5C4 7.91 7.58 5 12 5s8 2.91 8 6.5-3.58 6.5-8 6.5c-.55 0-1.09-.03-1.61-.1-.25-.04-.51-.04-.75 0-.34.04-.92.15-2.48.89-.34.16-.75.37-1.25.62.1-.89.18-1.77.23-2.57.07-1.04.15-1.64.23-1.92a.5.5 0 00-.22-.52C4.78 15.16 4 13.38 4 11.5z"/>
                            </svg>
                        <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    
            
            </nav>

            <div className="modal-container-s">
                <div className="modal-1-s">
                    <h1 className="gradient-text">Explore Jobs <br></br> And Opportunities</h1>
                    <p >See the new jobs or interships posted by alumini's or college, contribute in them and start learning with earning.Gain expierence from alumini's.</p>
                    
                    <select className="gradient-border">
                        <option value="" disabled>Choose The Field</option>
                        <option>Data Science</option>
                        <option>Cyber Security</option>
                        <option>Machine Learning</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                    </select>

                    <button className="btn-s">Explore Jobs</button>
                </div>
                <div className="modal-2-s">
                    <h1 className="gradient-text">Find <br></br>Mentors</h1>
                    <p >Connect With AI/ML Experts,Data Science Experts e.t.c,Get The Useful Expiernce From Mentors.
                    Choose The Field And Get Ready For Connecting To Your Mentor.</p>
                    
                    <select onChange={this.handleSelect} value={this.state.selectF}>
                        <option value="" disabled selected>Choose The Field</option>
                        <option>Data Science</option>
                        <option>Cyber Security</option>
                        <option>Machine Learning</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                    </select>

                    <button className="btn-s">Find Your Mentor</button>
                </div>
                <div className="modal-3-s">
                    <h1 className="gradient-text top">Create   <br></br> Connections</h1>
                    <p className="top" > Students Of Same Or Different Field , Create Teams For Competetions , Learn New Things With Them</p>
                    <button className="btn-s">Group Chat</button>
                </div>
            </div>

        </div>);
    }
}
 

export default Student




















/*import React from "react";

//import './student.css'; 


class Student extends React.Component{
    constructor(props){
        super(props);

       

    }

    render(){
        return (
        <div className="">

            <nav className="navbar">
                    <ul className="left">
                        <li className="head ">HOME</li>
                        <li className="head ">MENTORING</li>
                        <li className="head ">OPPORTUNITY</li>
                        <li className="head ">EVENT</li>
                        <li className="head">NEWS</li>
                    </ul>
                    <div className="profile-data">
                        <h3  className="profile-id">Login Id</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF" className="chat-icon">
                                <path d="M12 3C6.48 3 2 6.91 2 11.5c0 2.21 1.11 4.18 2.93 5.6-.05.42-.1 1.04-.16 1.83-.1 1.29-.2 2.41-.32 3.07a.5.5 0 00.75.47c.48-.25 1.19-.63 2.13-1.14 1.6-.86 2.16-.94 2.56-.94.57 0 1.16.06 1.76.06 5.52 0 10-3.91 10-8.5S17.52 3 12 3zM4 11.5C4 7.91 7.58 5 12 5s8 2.91 8 6.5-3.58 6.5-8 6.5c-.55 0-1.09-.03-1.61-.1-.25-.04-.51-.04-.75 0-.34.04-.92.15-2.48.89-.34.16-.75.37-1.25.62.1-.89.18-1.77.23-2.57.07-1.04.15-1.64.23-1.92a.5.5 0 00-.22-.52C4.78 15.16 4 13.38 4 11.5z"/>
                            </svg>
                        <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    
            
            </nav>

            

        </div>);
    }
}
 

export default Student

/**<div className="modal-container">
                <div className="modal-1">
                    <h1>Explore Jobs <br></br> And Opportunities</h1>
                    <p>See the new jobs or interships posted by alumini's or college, contribute in them and start learning with earning.Gain expierence from alumini's.</p>
                    
                    <select>
                        <option value="" disabled>Choose The Field</option>
                        <option>Data Science</option>
                        <option>Cyber Security</option>
                        <option>Machine Learning</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                    </select>

                    <button className="btn">Explore Jobs</button>
                </div>
                <div className="modal-2">
                    <h1>Find <br></br>Mentors</h1>
                    <p>Connect With AI/ML Experts,Data Science Experts e.t.c,Get The Useful Expiernce From Mentors.
                    Choose The Field And Get Ready For Connecting To Your Mentor.</p>
                    
                    <select >
                        <option value="" disabled>
                            Choose The Field
                        </option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="FrontEnd Developer">FrontEnd Developer</option>
                        <option value="BackEnd Developer">BackEnd Developer</option>
                    </select>

                    <button className="btn"  >Find Your Mentor</button>
                </div>
                <div className="modal-3">
                    <h1>Create   <br></br> Connections</h1>
                    <p>Connect With Different Students Of Same Or Different Field , Create Teams For Competetions , Learn New Things With Them</p>
                    <button className="btn">Group Chat</button>
                </div>
            </div>

           
 */