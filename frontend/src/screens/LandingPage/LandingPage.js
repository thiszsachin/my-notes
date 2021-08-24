import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/myNotes");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intor-text">
            <div>
              <h1 className="title">Welcome To My Notes App</h1>
              <h4 className="subtitle">One Safe Place for all your Notes...</h4>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbotton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="landingbotton"
                  variant="outline-primary"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
