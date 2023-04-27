import { useAuthenticator } from "@/hooks/authenticated";
import { usePosts } from "@/hooks/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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

const post_markup = (posts) => {
    return (
        <div className="mb-3">
            <Col className="col-md-6 m-auto">
                {posts.map((post, index) =>
                (<Card key={index}>
                    <h4 className="card-header">
                        <Link href='/#'>
                            {post.name}
                        </Link>
                    </h4>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                            {post.date}
                        </h6>
                        <p className="card-text">
                            {post.content}
                        </p>
                    </div>
                </Card>)
                )}

            </Col>

        </div>
    );
}
const clickHandler = async (e,router) => {
    e.preventDefault();
    const res = await fetch('/api/logout'); 
    if (res.status === 200) {
        router.push('/')
    }
    else if (res.status === 501) {
        error_markup('there was an error logging out');
    }
}
const Dashboard = () => {
    const authenticated = useAuthenticator();
    let router = useRouter();
    const posts = usePosts();

    useEffect(() => {
        if (authenticated === false) {
            router.push('/');
        }
    }, [authenticated, router])
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
                            <Button className="btn-outline float-end" onClick={(e) =>{clickHandler(e,router)}}>
                                Logout
                            </Button>
                        </h6>
                    </div>
                </Card>
            </div>
            {!posts && <div> {error_markup("There are no Posts! Follow Other Users To See Posts Here.")}</div>}
            {posts &&
                <div>
                    {post_markup(posts)}
                </div>
            }


        </ Container>
    );

}

export default Dashboard;