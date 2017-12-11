import React, {Component} from 'react';
import '../styles/Login.css';
import {Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      isLogged: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username == "admin" && this.state.password == "admin123") {
      this.setState({username: '', password: '', isLogged: true});
    } else {
      this.setState({username: '', password: '', isLogged: false});
      alert("Credenciales Invalidas");
    }

  }

  render() {
    return (<div className="Login">
      {
        this.state.isLogged
          ? <Redirect to="/home"/>
          : <div className="Login-box">
              <form onSubmit={this.onSubmit}>
                <div className="Login-form-box">
                  <label className="Login-username">UserName</label>
                  <input type="text" value={this.state.username} onChange={(e) => {this.setState({username: e.target.value})}}/>
                </div>
                <div className="Login-form-box">
                  <label className="Login-password">Password</label>
                  <input type="password" value={this.state.password} onChange={(e) => {
                      this.setState({password: e.target.value})
                    }}/>
                </div>
                <button type="submit" className="Login-submit">Iniciar sesion</button>
              </form>
            </div>
      }
    </div>);
  }
}

export default Login;
