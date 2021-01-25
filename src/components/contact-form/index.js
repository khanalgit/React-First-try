import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './contact.css'
import Button from '../../widgets/button'
class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();

//TODO:: Form Validation check "valid Email" and Message not excee 250 Characters

        console.log(this.state);
    }

    render() {

const { name, email, phone, message } = this.state;
        return (
            <div id="contact-form">
                <h2> {this.state.person} </h2>
                <h1>Contact Us</h1>
                <form onSubmit = {this.handleFormSubmit}>
                    <input type="text" name="name" placeholder="Name" onchange={this.handleNameChange} />
                    <input type="text" name="email" placeholder="Email" onchange={this.handleEmailhange}/>
                    <input type="text" name="phone" placeholder="Phone" onchange={this.handlePhoneChange}/>
                    <textarea name="message" placeholder="Message" onchange={this.handleMessageChange}></textarea>
                    <Button type="submit" title = "Submit" />
                </form>
            </div>
        )
    }

}

export default Form;