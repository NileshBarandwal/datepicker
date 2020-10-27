import React, { Component} from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
       
    }

    getInitialState = () => ({
        data: {
            name: '',
            address: '',
            phone: '',
            state:'',
            password: '',
            confirmPassword: ''
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

        if (data.name === '') errors.name = 'Name can not be blank.';
        if (data.address === '') errors.address = 'Address can not be blank.';
        if (data.phone === '') errors.phone = 'Phone can not be blank.';
        if (data.state === '') errors.state = 'State can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

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
                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="name">USERNAME</Label>
                    <Input id="name" value={data.name} invalid={errors.name ? true : false} name="name" onChange={this.handleChange} />
                    <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>

                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="address">ADDRESS</Label>
                    <Input id="address" value={data.address} invalid={errors.address ? true : false} name="address" onChange={this.handleChange} />
                    <FormFeedback>{errors.address}</FormFeedback>
                </FormGroup>

                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="phone">PHONE</Label>
                    <Input id="phone" value={data.phone} invalid={errors.phone ? true : false} name="phone" onChange={this.handleChange} />
                    <FormFeedback>{errors.phone}</FormFeedback>
                </FormGroup>

                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="state">STATE</Label>
                    <Input id="state" value={data.state} invalid={errors.state ? true : false} name="state" onChange={this.handleChange} />
                    <FormFeedback>{errors.state}</FormFeedback>
                </FormGroup>

                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="password">PASSWORD</Label>
                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup controlId="formBasicFirstName" style={{ width: '500px' }}>
                    <Label for="confirmPassword">CONFIRM PASSWORD</Label>
                    <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>

                <Button color="primary">Register</Button>
            </Form>
        );
    }
}

export default Register;