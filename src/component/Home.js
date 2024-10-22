import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import hero from ".//pic/logo2.png";
import react from ".//pic/react.png";
import flutter from ".//pic/flutter.png";
import symfony from ".//pic/symfony.png";
import xamarin from ".//pic/xamarin.png";
import { useSpring,animated } from 'react-spring';

export default function Home() {
  
  const animation = useSpring({
   
    from:{
      opacity:0,
      x:700
    },
    to:{
     opacity:1,
     x:300
    },
    delay: 300,
    
    config: { duration:800  }
  })

  const animation1 = useSpring({
   
    from:{
      opacity:0,
      x:500
    },
    to:{
     opacity:1,
     x:0
    },
    delay: 300,
    
  })
  return (
    <Wrapper>
         
      <section className="hero" id="home">

        <div className="container f_flex top">
          <div className="left top">
            <h3>Welcome to my word</h3>
            <h1>
              Salut je suis <span>Michel</span>
            </h1>
            <h2>
              {" "}
              <span>
                <Typewriter
                  words={["Développeur mobile ", "Développeur Full-stack"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1050}
                />
              </span>
            </h2>
            <p>
            Je suis un passionné des nouvelles technologies avec plus de 15 ans 
            d'expérience dans le domaine, j'ai un profil autodidacte & me suis
             reconverti dans le développement web et mobile il y a 3 ans.
            </p>
            <div className="hero_btn  d_flex">
            <animated.div style={animation1}>
              <div className="col_1">
                <h4>Find me</h4> 
                <div className="button">
         
            <a href="https://www.linkedin.com/in/michel-almont-909372216/">
            <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
            </a>
            <a href="   https://drive.google.com/file/d/1UooqUXM1ro7s-XqpIKN6BJ_Ac_X9rjrZ/view?usp=sharing">
            <button className="btn_shadow">
                    <i >CV</i>
                  </button>
            </a>
         
                
                </div>
              </div>
              </animated.div>
              <animated.div style={animation1}>
              <div className="col_1">
                <h4> Compétences principales</h4>

                <button className="btn_shadow">
                  <img src={react} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={flutter} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={symfony} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={xamarin} alt="" />
                </button>
              </div>
              </animated.div>
            </div>
          </div>
       
          <animated.div style={animation}>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
          </animated.div>
        </div>
        
      </section>
   
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .hero {
    position: relative;
  }
  .hero h3 {
    font-weight: 100;
    letter-spacing: 2px;
  }
  .hero h1 {
    font-size: 60px;
    font-weight: bold;
  }
  .hero h1 span {
    color: #04989e;
  }
  .hero h2 {
    font-size: 50px;
    font-weight: bold;
    color: #04989e;
  }
  .hero h2 span {
    color: black;
  }
  .hero p {
    color: #878e99;
    font-size: 18px;
    line-height: 30px;
    margin-top: 30px;
  }

  .hero_btn {
    margin-top: 20%;
  }
  .hero_btn {
    font-weight: 500;
    letter-spacing: 2px;
    color: #43474b;
    font-size: 15px;
    margin: 30px 0px 30px 0px;
  }

  .hero_btn button {
    margin-right: 30px;
    margin-bottom:10px;
  }
  .hero_btn i {
    font-size: 30px;
  }
  .hero_btn button img {
    width: 30px;
    height: 30px;
  }
  .hero .left {
    margin-right: 10%;
  }
  .hero .right {
    width: 40%;
    position: relative;
  }
  .hero .right_img {
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
    border-radius:10px;
    height:580px;
    width:510px;
    margin-top:20%;
  }

  .hero .right_img  img{
    position:absolute;
    top:0;
    right:20%;
    width:510px;
    border-radius:10px;
  }



@media (max-width: 820px) {

   .hero .right_img  img{
     width:100%;
     right:90%;
   }
   .hero .right_img {
    width: 30%;
    height: 30vh;
    
  }
   .hero .f_flex {
    flex-direction: column;
    flex-direction: column-reverse;
  }
   
   }

  @media (max-width: 768px) {
  .hero .right,
  .hero .left {
    width: 100%;
    margin-left: 20px;
  }
  
  .hero .right_img {
    width: 100%;
    height: 50vh;
  }
  
  .hero h2 {
    font-size: 30px;
  }
  .hero h1 {
    font-size: 36px;
  }

}
`;
