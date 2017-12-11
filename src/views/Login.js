import React, {Component} from 'react';
import '../styles/Login.css'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.username == "admin" && this.state.password == "admin123") {
      alert("Bienvenido");
    } else {
      alert("Data incorrecta");
    }
  }

  render() {
    return (<div className="Login">
      <div className="Login-box">
        <form onSubmit={this.onSubmit}>
          <div className="Login-form-box">
            <label className="Login-username">UserName</label>
            <input type="text" value={this.state.username} onChange="onChange" ={(e) => {this.setState({username: e.target.value})}}/>
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
    </div>);
  }
}

export default Login;
