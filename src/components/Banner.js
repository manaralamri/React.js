import { useState, useEffect } from "react";
import { Col, Container , Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom'; //login page استيراد useNavigate

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const navigate = useNavigate(); // تعريف navigate

  const toRotate = ["Tech Tips", "Simplify Tech", "Discover Tech" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random () * 100);
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() =>{
      tick();

    }, delta );
    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText){
      setDeleting(true);
      setDelta(period);

    }else if(isDeleting && updatedText === ''){
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section className="banner" id="home">
    <Container>
    <Row className="align-item-center">
    <Col xs={12} md={6} xl={7}>
    <TrackVisibility>
    {({ isVisible}) => 
       <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
         <span className="tagline">Welcome to My Tech Tips Hub!
         </span>

        <h1>{`Hi `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Tech Tips", "Simplify Tech", "Discover Tech" ]'><span className="wrap">{text}</span></span></h1>

        <p dir="rtl">
        Discover the latest trends, tips, and tricks to make the most of technology. Whether you're a beginner or an expert, you'll find something valuable here:
        Learn how to secure your online presence with tips and tools to protect your data.
        Explore productivity tools that simplify your work and help you achieve your goals.
        Stay updated with emerging technologies like AI, cloud computing, and more.
        
        </p>
        <Col xs={12} md={6} xl={5} className="button-login-container">

                    {/* الزر مع التوجيه إلى صفحة تسجيل الدخول عند النقر */}
                    <button 
                    className="button-login"
                    onClick={() => navigate('/login')}
                  >
                  login 
                  </button>
                  </Col>
      
    </div>}
        </TrackVisibility>
        </Col>
    <Col xs={12} md={6} xl={5}>
    <img src={headerImg} alt="Headder Img"/>
    
    </Col>
    </Row>
    </Container>
    </section>
  )
}