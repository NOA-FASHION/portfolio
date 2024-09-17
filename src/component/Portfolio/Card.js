import styled from "styled-components";
import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';

export default function Card(props) {
  console.log("Index dans la carte:", props.index);

  const animation = useSpring({
    opacity: true ? 1 : 0,
    transform: true ? "translateX(0)" : "translateX(-50%)"
  })
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };
  return (
    <Wrapper>
      <div className="box btn_shadow cardPortfolio">

        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="d_flex">
          <div>


            <button className="btn_shadow typeApp ">
              <i className="fab fa-facebook-f"></i>
            </button>
            <span className="titreDesc">{props.category}</span>
          </div>

          <div>
            <button className="btn_shadow typeApp ">
              <i class="fas fa-mobile  "></i>
            </button>
            <span>{props.description}</span>
          </div>
        </div>

        <div className="center">
          <div className="title">
            <h2 onClick={toogleModal}>{props.title}</h2>
            <a href="#popup" className="arrow">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {(props.category === 'Easymakemoney' || props.category === 'POSFlutter' )&& (
          <div className="center">
            <div className="techno login-details">
              <span>Login: <strong>test@pos.com</strong></span>
              <span>Mdp:  <strong>Test@1234</strong></span>
            </div>
          </div>
        )}

        <div className="prop">
          <div className="techno ">
            <h3>Technologie : </h3>
            {props.commentaire}
          </div>
          <div className="button ">
            <a href={props.adresseGithub}>
              <button className="btn_shadow ">
                Ghitub <i class="far fa-thumbs-up"></i>
              </button>
            </a>

            <a href={props.adresseWeb}>
              <button className="btn_shadow">
                Voir projet
                <i class="fas fa-chevron-right"></i>
              </button>
            </a>
            {props.category === 'Easymakemoney' && (
              <a
                href="https://drive.google.com/file/d/1oHxBp1g4Q5LRCuxIb9yOcypVYmCJ3rxZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn_shadow">
                  Download APK
                  <i className="fas fa-chevron-right"></i>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  button {
    margin: 10px;
  }
  span {
    color: blueviolet;
  }
  .typeApp {
    display: inline;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .techno {
    margin: -10px 10px 10px 0px;
  }
  .center {
    text-align: center;
  }
  .prop {
    margin-left: 10px;
  }
  .titreDesc {
    margin-top: 16px;
  }
  .login-details {
  display: flex; /* Utilise flexbox pour aligner les éléments côte à côte */
  justify-content: flex-start; /* Aligner les éléments au début de la div */
  gap: 20px; /* Espace entre le login et le mot de passe */
}

.login-details span {
  white-space: nowrap; /* Empêche le texte de se couper sur plusieurs lignes */
}
.cardPortfolio{
  height:600px;
}
  @media (max-width: 1210px) {
    .cardPortfolio{
  height:620px;
}
}
`;
