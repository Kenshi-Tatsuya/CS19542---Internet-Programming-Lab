import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const [showLoadingVideo, setShowLoadingVideo] = useState(false); // State for loading video
  const toRotate = ["your ai companion"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  const handleStartNextJS = async () => {
    setShowLoadingVideo(true); // Show loading video
    try {
      await axios.get('http://localhost:5001/start-next'); // Send request to Node.js server
      window.location.href = 'http://localhost:3001'; // Redirect to Next.js page
    } catch (error) {
      console.error('Error starting Next.js:', error.message);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {`Hi! I'm Fervis`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Your AI companion" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Fervis is a next-generation AI assistant built with advanced emotion recognition, designed to interact like a true friend. Fervis can understand not only the words you say but also the emotions behind them, making conversations feel natural and personal. Whether you're looking for thoughtful responses, emotional support, or just a friendly chat, Fervis is here to provide an experience like no other.
                  </p>
                  <button onClick={handleStartNextJS}>
                    Let’s Call <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        {showLoadingVideo && (
          <div>
            <video
              src="C:/xampp/htdocs/Fervis/src/assets/img/Please stand by.mp4"  // Path to your loading video
              autoPlay
              loop
              controls={false}  // Disable controls for better UX
              style={{ width: '100%', height: 'auto' }}  // Optional: make the video responsive
            />
          </div>
        )}
      </Container>
    </section>
  );
};
