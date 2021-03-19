import React, {Component} from 'react';
import {Row, Col, Nav} from 'react-bootstrap';
import logo from '../assets/logo.png'; 
import '../styles.css'
export class SignIn extends Component {
    render () {
        return (
            <div class = "signin_padding"> 
                <Row>
                <Col sm = "4"><center><img src = {logo} height = {100} ></img></center></Col>
                <Col><h4>Welcome to the New Beginnings Sign In page! Please log in below to access your account. If you have not made an account, sign up to create an account.</h4></Col>
                </Row>
                <div class = "space20"></div>
                <Row>
                  <Col><center> <h3> Sign In </h3> </center> </Col>
                  <Col><center> <h3> Sign Up </h3> </center> </Col>
                </Row>  
                <center>
                <Row>
                    <Col><label>Username : </label>   <input type="text" placeholder="Enter Username" name="username" required></input> </Col>
                    <Col><label>Username : </label>   <input type="text" placeholder="Enter Username" name="username" required></input> </Col>
                </Row> 
                <Row>
                <Col><label>Password : </label>   <input type="password" placeholder="Enter Password" name="password" required></input></Col>
                <Col><label>Password : </label>   <input type="password" placeholder="Enter Password" name="password" required></input></Col>
                </Row>
                <Row><Col><button type="submit">Login</button></Col>
                <Col><button type="submit">Create Account</button></Col>  
                </Row>
                </center>
                <form>  
                   
                     
                         
            
          
                </form>     
       
            </div>
        )
    }
}