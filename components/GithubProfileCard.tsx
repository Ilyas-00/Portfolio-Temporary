import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Feel free to reach out!</h2>
              <p className="lead text-white mt-3">
              WHETHER YOU HAVE A PROJECT IN MIND OR JUST WANT TO CHAT, I'M HERE FOR YOU.
              
              </p>
              {/* <p className="text-white mt-3">{bio}</p> */}
            
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  ); 
};

export default GithubProfileCard;
