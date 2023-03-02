import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const LoginForm = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };
  return (
    <div>
        <p style={{fontSize :"1.2rem"}}>Member Access</p>
        <p className="header-1">Sign In</p>
        <p style={{fontSize :"0.9rem"}}>
        Don’t have an account? Register{" "}
        <span>
          <a href="/register">Here</a>
        </span>
        </p>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
                <Form.Text className="text-muted">
            We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
            type="password"
            placeholder="at least 4 characters strong"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me?" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-block px-5">Login</Button>
             <br />
            <div className="forgot-pass">
                <a href="\">Forgot your password?</a>
            </div>
        </Form>
    </div>
  )
}

export default LoginForm