import React from "react";
import './css/login.css'; 

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rightPanelActive: false,
            formData: {
                enrollmentId: '',
                email: '',
                password: ''
            }
        };
    }

    handleSignInClick = () => {
        this.setState({ rightPanelActive: false });
    };

    handleSignUpClick = () => {
        this.setState({ rightPanelActive: true });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { enrollmentId, email, password } = this.state.formData;

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ e_id: enrollmentId, email, password })
            });
            const result = await response.json();

            if (result.success) {
                if (result.role === 'student') {
                    
                    window.location.href = '/student-dashboard';
                } else {
                    
                    window.location.href = '/alumni-dashboard';
                }
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    render() {
        return (
            <div id="main-L" className={`container ${this.state.rightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <input 
                            type="text" 
                            name="enrollmentId" 
                            placeholder="Enrollment Id" 
                            value={this.state.formData.enrollmentId}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={this.state.formData.email}
                            onChange={this.handleInputChange}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={this.state.formData.password}
                            onChange={this.handleInputChange}
                        />
                        <a href="#">Forgot Password</a>
                        <button type="submit">Login</button>
                    </form>
                </div>

                <div className="form-container sign-up-container">
                    <form>
                        <h1>Register</h1>
                        <input type="text" name="enrollmentId" placeholder="Enrollment Id" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <select>
                            <option value="" disabled selected>Choose a Role</option>
                            <option>Alumni</option>
                            <option>Student</option>
                            <option>Host</option>
                        </select>
                        <select>
                            <option value="" disabled selected>Choose your Field</option>
                            <option>Data Science</option>
                            <option>Cyber Security</option>
                            <option>Machine Learning</option>
                            <option>FrontEnd Developer</option>
                            <option>BackEnd Developer</option>
                        </select>
                        <button>Register</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome to LinkUp</h1>
                            <p>Affiliated with a University then login with your credentials </p>
                            <button className="ghost" onClick={this.handleSignInClick}>Login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome to LinkUp</h1>
                            <p>New User?Not Associated With Any University ,then Register First</p>
                            <button className="ghost" onClick={this.handleSignUpClick}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
