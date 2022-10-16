import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import hero from ".//pic/hero.png";
import react from ".//pic/react.png";
import flutter from ".//pic/flutter.png";
import symfony from ".//pic/symfony.png";
export default function Home() {
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
                  words={["Dévellopeur mobile ", "dévellopeur full-stack"]}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores adipisci autem quas ipsam, tempore numquam provident
              porro! Ducimus, nobis amet? Autem illum assumenda omnis delectus
              maxime explicabo aspernatur reiciendis numquam!
            </p>
            <div className="hero_btn  d_flex">
              <div className="col_1">
                <h4>Find me</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4> Compétence</h4>

                <button className="btn_shadow">
                  <img src={react} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={flutter} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={symfony} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
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
    color: #ff014f;
  }
  .hero h2 {
    font-size: 50px;
    font-weight: bold;
    color: #ff014f;
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

`;
