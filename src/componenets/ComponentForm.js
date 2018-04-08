import React, {Component} from 'react';
import validator from 'validator';
import FormError from './FormErrors';

const sgMail = require('@sendgrid/mail');

class ComponentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            email: '',
            tel: '',
            formValidity: false,
            submitDisabled: false,
            formErrors: {
                email: 'Please Enter a correct Email',
                name: 'First and last names should contain only alphabet characters',
                tel: 'Telephone can contain only 10 numeric characters (e.g. 3057778888)'
            },
        };

        const SENDGRID_API_KEY = "ENTER_API_KEY_HERE";
        sgMail.setApiKey(SENDGRID_API_KEY);

        this.changeValue = this.changeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    changeValue = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let formValidity = true;
        let errorType = undefined;

        const MSG = {
            to: 'erezt.dev@gmail.com',
            from: 'backoffice@jones.com',
            subject: 'New Lead',
            text: ' ',
            html: '<div style="text-align:center;font-size:22px">' +
            '<h2>You have received a new lead!</h2>' +
            '<ul style="text-align: left;font-size:16px">' +
            '<li>First Name: ' + this.state.fName + '</li>' +
            '<li>Last Name: ' + this.state.lName + '</li>' +
            '<li>Mail Address: ' + this.state.email + '</li>' +
            '<li>Phone Number: ' + this.state.tel + '</li>' +
            '</ul>' +
            '</div>',
        };

        if (!validator.isEmail(this.state.email)) {
            formValidity = false;
            errorType = this.state.formErrors.email
        } else if (!validator.isAlpha(this.state.fName) || !validator.isAlpha(this.state.lName)) {
            formValidity = false;
            errorType = this.state.formErrors.name
        } else if (!validator.isMobilePhone(this.state.tel, 'en-US')) {
            formValidity = false;
            errorType = this.state.formErrors.tel
        }
        if (!formValidity) {
            this.setState({
                formValidity,
                errorType
            })
        } else {
            this.setState({
                formValidity,
                errorType: "Success, we'll get back to you shortly!",
                submitDisabled: true,
                fName: '',
                lName: '',
                email: '',
                tel: ''
            }, () => sgMail.send(MSG))
        }
    };

    render() {
        return (
            <form>
                <input
                    placeholder="First Name"
                    value={this.state.fName}
                    name="fName"
                    onChange={event => this.changeValue(event)}
                /><br/><br/>
                <input
                    placeholder="Last Name"
                    value={this.state.lName}
                    name="lName"
                    onChange={event => this.changeValue(event)}
                /><br/><br/>
                <input
                    placeholder="Email"
                    value={this.state.email}
                    name="email"
                    onChange={event => this.changeValue(event)}
                /><br/><br/>
                <input
                    placeholder="Telephone + area code"
                    value={this.state.tel}
                    name="tel"
                    onChange={event => this.changeValue(event)}
                /><br/><br/>
                <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)}>Submit</button>
                <FormError errorType={this.state.errorType}/>
            </form>
        );
    }
}

export default ComponentForm;