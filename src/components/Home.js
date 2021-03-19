import React, {Component} from 'react';
import {Row, Col, Nav} from 'react-bootstrap';
import {Link, HashRouter as Router} from "react-router-dom"
import handshake from '../assets/handshake.png';
import briefcase from '../assets/briefcase.png';
import books from '../assets/books.png';

export class Home extends Component {
    render () {
        return (
            <div>
                <h1>New Beginnings</h1>
                <h2>Mission</h2>
                <p> (Insert a better blurb) New Beginnings is an organization dedicated to reducing recidivism rates through employment and mentorship for people who were formerly incarcerated. New Beginnings hopes to connect people, while giving people easier acceess to resources such as financial planning, professional development, afforable housing etc.  </p>
                
                <h2>Components</h2>
                <Router>
      
                <Row> 
                    <Col sm = "4" className = "centered"> <h5> Mentorship</h5>
                    <Nav.Item><Nav.Link as = {Link} to = "/mentorship"><img src = {handshake} height = {50}></img></Nav.Link></Nav.Item>
                    <p> (include image of this with ahref) Studies show that mentorship is helpful...Click here to connect with some of our mentors who have had succesful careers after reentry.</p>
                    </Col>
            
                    <Col sm = "4" className = "centered"> <h5> Employment</h5>
                    <Nav.Item><Nav.Link as = {Link} to = "/employment"><img src = {briefcase} height = {50}></img></Nav.Link></Nav.Item>
                    <p>(ahref image) Here you can find a cirrciulum designed to help with things like networking, touching up your resume, budgeting, etc. </p></Col>
                
                    <Col sm = "4" className = "centered"> <h5>Resources</h5> 
                    <Nav.Item><Nav.Link as = {Link} to = "/profdev"><img src = {books} height = {50}></img></Nav.Link></Nav.Item>
                     <p>(a href image) Click here for a conglomerate of resrouces such as STEP books (talk with Chase to figure this out)</p></Col>
                </Row>
                </Router>

                <h2>Feeback</h2>
                <p>If you have some comments on our website, please let us know through this feedback form</p>
                <h2>Contact Info</h2>
                <p> Email:</p>
                    
                
                
               
                <p> Describe the mission and vision of New Beginnings
                    Include icons that link to other pages and a brief description of each
                    Contact info for New Beginnings
                    Feedback Form?
                </p>
            </div>
        )
    }
}