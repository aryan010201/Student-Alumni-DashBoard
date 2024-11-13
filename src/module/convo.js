import React from "react";




class Convo extends React.Component{
    constructor(props){
        super(props);

           };

    render(){
        return (
            <div>
                <div className="chat-page">
                    <div className="chats">
                        <div className="active-user">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"
                                className="profile-icon" fill="#333"
                            ><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <h2>name</h2>
                            

                        </div>
                       <hr></hr>

                        <div className="all-user">
                            <h3>Messages</h3>
                            <div className="user">
                                <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"  fill="#333"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                
                                <div>
                                    <h3>Name 1</h3>
                                    <h5>status</h5>
                                </div>

                            </div>

                            <div className="user">
                                <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"  fill="#333"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                
                                <div>
                                    <h3>Name 2</h3>
                                    <h5>status</h5>
                                </div>

                            </div>

                            <div className="user">
                                <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"  fill="#333"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                
                                <div>
                                    <h3>Name 3</h3>
                                    <h5>status</h5>
                                </div>

                            </div>

                            <div className="user">
                                <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"  fill="#333"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                
                                <div>
                                    <h3>Name 4</h3>
                                    <h5>status</h5>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <div className="chat-section">

                    </div>
                </div>
            </div>
        );
    }
}
 

export default Convo