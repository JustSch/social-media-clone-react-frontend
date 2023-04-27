import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Col, Form, FormControl, FormGroup, FormLabel, Row, Container, Button, Alert } from "react-bootstrap";

const Register = () => {
    const [errorMsg, setErrorMsg] = useState('');
    let router = useRouter();

    const submitHandler = async (e) => {
        e.preventDefault();
        if (errorMsg) setErrorMsg('');

        if (e.currentTarget.password.value !== e.currentTarget.password2.value){
            setErrorMsg("The Passwords Do Not Match Please Try Again");
        }

        else {
            //register api here
        }
        

    };
    return (
        <Container>
            <Row className="mt-5">
                <Col className="col-md-6 m-auto">
                    <Card className="card-body">
                        <h1 className="text-center mb-3">
                            Register
                        </h1>
                        {errorMsg && <Alert className="alert-warning">{errorMsg}</Alert>}
                        <Form onSubmit={submitHandler}>
                            <FormGroup>
                                <FormLabel htmlFor="name" className="mt-4">
                                    Name
                                </FormLabel>
                                <FormControl type="name"
                                    id="name"
                                    name="name"
                                    class="form-control"
                                    placeholder="Enter Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="email" className="mt-4">
                                    Email
                                </FormLabel>
                                <FormControl
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                    placeholder="Enter Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="password" className="mt-4">
                                    Password
                                </FormLabel>
                                <FormControl
                                    type="password"
                                    id="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="Create Password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="password2" className="mt-4">
                                    Confirm Password
                                </FormLabel>
                                <FormControl
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    class="form-control"
                                    placeholder="Confirm Password"
                                />
                            </FormGroup>
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