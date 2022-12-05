import React  from 'react';
import './pageExample.style.css';
import { Navigate } from "react-router-dom";
import axios from 'axios';



class PageExample extends React.Component {
    
    state = {
        name : "",
        email:"",
        password : "",
        repassword :"",
        mode :"login",
        users : {}
    }
    constructor(props) {
        super(props);
        this.toggleMode = this.toggleMode   .bind(this);
      } 
    componentDidMount(){
        fetch('http://localhost:3000/users', {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }}).then(resp=>resp.json())
            .then(result=>this.setState({
                users : result.users
            }))
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
      }
    handlesubmit = (e)=> {
        e.preventDefault();
        if (this.state.mode==="login"){
            let verif =""
            for (let i =0;i<this.state.users.length;i++){
                if(this.state.users[i].email===this.state.email && this.state.users[i].password===this.state.password){
                    verif="true"
                }
            }
            if (verif===""){
                alert('incorrect credentials')
            }
            else {
                <Navigate to="/page-example2 replace ={true}"/>
            }
        }
        else {
            if (this.state.repassword===this.state.password){
                let formInfo = {
                    name :this.state.name,
                    email :this.state.email,
                    password : this.state.password
                }
                axios
                .post('http://localhost:3000/users', formInfo)
                .then(() => console.log('user Created'))
                .catch(err => {
                    console.error(err);
                });
            }
            else {
                alert('password not matching')
            }
        }
    };
    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }
    render() {
        return (
            <div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <form onSubmit={this.handlesubmit}>
                        <div className="form-block__input-wrapper">
                            <div className="form-group form-group--login">
                                <input className="form-group__input" type="email" name="email" label={this.email} onChange={this.handleInputChange.bind(this)} value ={this.email} disabled={this.state.mode === 'signup'}/>
                                <input className="form-group__input" type="password" name="password" label="password"onChange={this.handleInputChange.bind(this)}  value ={this.password} disabled={this.state.mode === 'signup'}/>
                            </div>
                            <div className="form-group form-group--signup">
                                <input className="form-group__input" type="text" name="name" label="name" value={this.name}onChange={this.handleInputChange.bind(this)} disabled={this.state.mode === 'login'} />
                                <input className="form-group__input" type="email" name="email" label="email" value={this.email} onChange={this.handleInputChange.bind(this)}/>
                                <input className="form-group__input" type="password" name="password" label="password" value ={this.password}   onChange={this.handleInputChange.bind(this)} disabled={this.state.mode === 'login'} />
                                <input className="form-group__input"type="password" name="repassword" label="repeat password" value ={this.repassword} onChange={this.handleInputChange.bind(this)} disabled={this.state.mode === 'login'} />
                            </div>
                        </div>
                        <button className="button button--primary full-width" type="submit" >{this.state.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
                    </form>
                </section>
            </div>
        )
    }
}

 
export default PageExample;