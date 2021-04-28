import React from 'react';
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Components/About.module.css'
import nfIcon from '../assets/imgs/transferir.svg'
import estoqIcon from '../assets/imgs/estoque.png'
import servIcon from '../assets/imgs/services.svg'
import cadcon from '../assets/imgs/cad.svg'
import FadeIn from 'react-fade-in';

const About = () => {

  return (
    <section className={styles.About} id="about">
      <FadeIn>
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="title text-center mb-5">
              <h1 className="font-weight-normal">O ZLTech te ajuda de forma simples e agil <br/> <span className={styles.subtitles_2}>confere aqui</span></h1>
            </div>
            <div className={styles.cards_list}>

              <div className={styles.card}>

                <div className={styles.card_image}>
                  <img src={nfIcon} alt="NF" />
                </div>
                <div className={styles.card_title1}>
                  <h5>Notas Fiscais</h5>
                  <p> Emita notas fiscais de forma descomplicada, e preencha o setup inicial apenas uma vez. </p>
                </div>
              </div>

              <div className={styles.card_2}>
                <div className={styles.card_image}>
                  <img src={cadcon} />
                </div>
                <div className={styles.card_title1}>
                  <h5>Cadatro Produto</h5>
                  <p> Emita notas fiscais de forma descomplicada, e preencha o setup inicial apenas uma vez. </p>
                </div>
              </div>

              <div className={styles.card_3}>
                <div className={styles.card_image}>
                  <img src={servIcon} />
                </div>
                <div className={styles.card_title1}>
                  <h5>Serviço</h5>
                  <p> Emita notas fiscais de forma descomplicada, e preencha o setup inicial apenas uma vez. </p>
                </div>
              </div>

              <div className={styles.card_4}>
                <div className={styles.card_image}>
                  <img src={cadcon} />
                </div>
                <div className={styles.card_title1}>
                  <h5>Estoque</h5>
                  <p> Emita notas fiscais de forma descomplicada, e preencha o setup inicial apenas uma vez. </p>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
      </FadeIn>
    </section>
  );
}

export default About;