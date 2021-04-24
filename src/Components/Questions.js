import React from 'react';
import { Container, Row, Col } from "reactstrap";

import Accour from '../Components/CardsInfor/Accord';
import styles from '../../styles/Components/Questions.module.css'
import 'react-accessible-accordion/dist/fancy-example.css'

const Question = () => {

  return (
    <section className={styles.topp} id="service">
      <Container>
      <Row  className="justify-content-center mt-5">
              <Col md={12}>
                <div  className="title text-center mb-5" >
              <h1 className="font-weight-normal text-black" className={styles.subtitles_qf}>Perguntas frequentes</h1>
              </div>
                <Accour/>
                    </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Question;