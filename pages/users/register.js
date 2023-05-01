import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Col, Form, FormControl, Row, Container, Button, Alert } from "react-bootstrap";

const Register = () => {
    const [errorMsg, setErrorMsg] = useState('');
    let router = useRouter();

    async function handleSubmit (e) {
        e.preventDefault();
        let errors=[];
        if (errorMsg) setErrorMsg('');
        if (!e.currentTarget.name.value ||
            !e.currentTarget.email.value ||
            !e.currentTarget.password.value ||
            !e.currentTarget.password2.value) {
                errors.push("Please Enter All Fields!!");
        }

        if (e.currentTarget.password.value !== e.currentTarget.password2.value){
            errors.push("The Passwords Do Not Match Please Try Again");
        }

        if (e.currentTarget.password.value < 6){
            errors.push("Password must be at least 6 characters");
        }
        if (errors.length > 0) {
            setErrorMsg(errors.join(' '));
        }

        else {
            //register api here
        }
        

    }
    return (
        <Container>
            <Row className="mt-5">
                <Col className="col-md-6 m-auto">
                    <Card className="card-body">
                        <h1 className="text-center mb-3">
                            Register
                        </h1>
                        {errorMsg && <Alert className="alert-warning">{errorMsg}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="name" className="mt-4">
                                    Name
                                </Form.Label>
                                <FormControl type="name"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Name"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email" className="mt-4">
                                    Email
                                </Form.Label>
                                <FormControl
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password" className="mt-4">
                                    Password
                                </Form.Label>
                                <FormControl
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Create Password"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password2" className="mt-4">
                                    Confirm Password
                                </Form.Label>
                                <FormControl
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    placeholder="Confirm Password"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit" className="btn-large btn-primary mt-4">Register</Button>
                            </div>
                        </Form>
                        <p className="lead mt-4">
                            Have An Account? <Link href="/users/login">Login</Link>
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;