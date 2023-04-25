import Link from "next/link";
import { Col, Container, Row, Card } from "react-bootstrap";

const Login = () => {
    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col className="col-md-6 m-auto">
                        <Card className='card-body'>
                            <h1 className="text-center mb-3">Login</h1>

                            <form action="/api/users/login" method="POST">
                                <div className="form-group">
                                    <label for="email" className="form-label mt-4">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="form-label mt-4">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="submit" className="btn btn-large btn-primary mt-4">Login</button>
                                </div>
                            </form>

                            <p className="lead mt-4">
                                No Account? <Link href="/users/register">Register</Link>
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Login;