import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            phone: '',
            password: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

    
        if (data.phone === '') errors.phone = 'Phone can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            

            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicphone" style={{ width: '500px'}}>
                    <Label for="phone">PHONE NO</Label>
                    <Input id="phone" value={data.phone} invalid={errors.phone ? true : false} name="phone" onChange={this.handleChange} />
                    <FormFeedback>{errors.phone}</FormFeedback>
                </FormGroup>
                

                <FormGroup controlId="formBasicpassword" style={{ width: '500px' }}>
                    <Label for="password">PASSWORD</Label>
                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <Button color="primary">LOGIN</Button>
            </Form>
            
        );
    }
}

export default Register;

