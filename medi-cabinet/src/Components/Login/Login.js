import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { Form, Input, Button } from 'reactstrap';



class Login extends React.Component {
    state = {
        credentials: {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        console.log(this.state.credentials)
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/dashboard');
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <>
                <Form onSubmit={this.login}>
                    <h2>Login</h2>

                    <label>Email:
            <Input
                            type='text'
                            name='email'
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>Password:
            <Input
                            type='text'
                            name='password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <Button>Log in</Button>

                </Form>
            </>
        );
    };
}

export default Login;
