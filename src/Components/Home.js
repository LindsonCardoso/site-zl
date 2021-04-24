import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from '../../styles/Home.module.css';
import { BsPlay } from "react-icons/bs";
import imgTop from './book.png'
import FadeIn from 'react-fade-in';

const Home = () => {
  return (


    <section className="section position-relative" id="about">
      <FadeIn>
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
          <div className="pr-lg-5">
          <h1 className="mb-4 font-weight-normal text-center text-light">Melhor plataforma de gestão online <br /> para seu negócio.<span className="text-primary font-weight-medium"> ZLTech</span></h1>
              <br/>
              <p className=" mb-5 pb-3 text-light text-center">
              t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Man
              </p>
              <div className={styles.cards_list}>
                <div className={styles.btnP}>
                  <div className="title-white">         
                    <p  className={styles.card_title} >
                      Baixar gratis
                    </p>
                  </div>
                </div>
                <div className={styles.btnV}>
                  <div className={styles.card_title} className="title-white">          
                      <span className={styles.iconss}> <BsPlay /> Assistir vídeo</span>             
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.react_reveal}>
                  <div >
                    <br/>
                    <img className={styles.backgroundD} src={imgTop}/>
                    </div>
                </div>
          </Col>
        </Row>
      </Container>
      </FadeIn>
    </section>

  );
}

export default Home;