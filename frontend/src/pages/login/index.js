import React, { Component } from 'react';
import './login.style.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.state.mode = "login"

    }

    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }
    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

// const submit = e => {
//     if ({this.props.onSubmit}){
//         e.preventDefault()
//         fetch('/api', {
//           method: 'POST',
//           body: JSON.stringify({ user }),
//           headers: { 'Content-Type': 'application/json' },
//         })
//           .then(res => res.json())
//           .then(json => setUser(json.user))
//     }
//   }
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <form onSubmit="submit">
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

// const App = () => (
//     <div className={`app app--is-${mode}`}>
//         <PageExample
//             mode={mode}
//             onSubmit={
//                 function() {
//                     console.log('submit');
//                 }
//             }
//         />
//     </div>
// );

 
export default Login;