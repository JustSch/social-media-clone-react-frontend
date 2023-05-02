import { useJSONFetcher } from '@/hooks/JSONFetcher';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Card, Col, Button, Row } from 'react-bootstrap';

const Profile = () => {
  const router = useRouter();
  const { uid } = router.query;
  const [errorMsg, setErrorMsg] = useState('');
  const [headerHTML, setHeaderHTML] = useState('');
  const [postHTML, setPostHTML] = useState('');

  //fetch to get user info to create header(make a seperate hook)
  //fetch to get user's posts to make post section(make a seperate hook)


  useEffect(() => {
    if (!uid) return;
    const url = `/api/user/${uid}`;
    let fetchingUser = async () => {
      let res = await fetch(url);
      if (res.status === 404) {
        setErrorMsg('This User Could Not Be Found');
        return;
      }
      let data = await res.json();
      setHeaderHTML(header_markup(data))
      
      fetchingUserData();
    }
    const dataUrl = `/api/user/${uid}/posts`;
    let fetchingUserData = async () => {
      let res = await fetch(dataUrl);
      
      let data = await res.json();
      if (res.status === 404 || data.length === 0){
        setErrorMsg('This User Does Not Have Any Posts');
        return;
      }

      setPostHTML(post_markup(data));
    }

    fetchingUser();
  }, [uid])


  return (
    <>
      <div id="profile_header" className="mb-3 col-md-6 m-auto">
        {headerHTML}

      </div>
      <div id="posts">
        {errorMsg && error_markup(errorMsg)}
        {postHTML}
      </div>
    </>
  )
}

export default Profile

const post_markup = (postJSON) => {
  return (
    <>
      {
        postJSON.map((post, index) => (
          <div className='mb-3' key={index}>
            <Col className="col-md-6 m-auto">
              <Card>
                <h4 className="card-header">
                  <Link href={`/users/profile/${post.name}`}>
                    {post.name}
                  </Link>
                </h4>
                <Card.Body>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {post.date}
                  </h6>
                  <p className="card-text">
                    {post.content}
                  </p>
                </Card.Body>

              </Card>
            </Col>
          </div>
        ))
      }
    </>
  )
}

const header_markup = (user) => {
  return (
    <Card>
      <Card.Body>
        <h1 className='card-title'>
          {`${user.name}'s Profile`}
        </h1>
        <h6 className="card-subtitle mb-2 text-muted">
          {`Following: ${user.following.length}  Followers: ${user.followers.length}`}
          <Button type="button" className="btn-outline float-end" id="follow_btn">Follow</Button>
        </h6>
      </Card.Body>
    </Card>
  )
}

const error_markup = (error_message) => {
  return (
    <Row className="mt-5">
        <Col className="col-md-6 m-auto">
          <Card className="card-body">
          <h1 className="text-center mb-3">{error_message}</h1>
          </Card>
        </Col>
      </Row>
  )
}
