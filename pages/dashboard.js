import { useAuthenticator } from "@/hooks/authenticated";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const error_markup = (error_message) => {
    return (
        <Row className="mt-5">
            <Col className="col-md-6 m-auto">
                <Card className="card-body">
                    <h1>
                        {error_message}
                    </h1>
                </Card>
            </Col>
        </Row>
    );
}

const Dashboard = () => {
    const authenticated = useAuthenticator();
    let router = useRouter();
    useEffect(()=>{
        if (authenticated === false){
            router.push('/');
        }
    },[authenticated,router])
    return (
        <Container>
            <div id="dashboard_header">
                <Card className="mb-3 col-md-6 m-auto">
                    <div className="card-body">
                        <h1 className="card-title">
                            Dashboard
                        </h1>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <Link href='/PostCreator'>
                                Create a Post
                            </Link>
                            <p className="lead mb-3">
                                Search For A User To Follow
                            </p>
                            <Link href='/search'>
                                Here
                            </Link>
                            <Link href='/users/logout' className="btn btn-outline-primary float-end">
                                Logout
                            </Link>
                        </h6>
                    </div>
                </Card>
            </div>
            


        </ Container>
    );

}

export default Dashboard;