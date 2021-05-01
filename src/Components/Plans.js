import React from 'react';
import { Container, Row, Col } from "reactstrap";
import styles from '../../styles/Components/Plans.module.css'
import {List } from 'semantic-ui-react'
import Accour from './CardsInfor/Accord';
import 'react-accessible-accordion/dist/fancy-example.css'


   const economico = [
  {
    id: 1,
    description: 'Notas fiscais',
  },{
    id: 2,
    description: 'Estoque',
  }
  ];

const premium = [
    {
      id: 1,
      description: 'teste',
    }
    ];

  const platina = [
      {
        id: 1,
        description: 'ok',

      }
      ]
      
const Plans = (props) => {
  return (
    <section className={styles.topp} id="about">
      <Container> 
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="title text-center mb-5">
              <h1 className="font-weight-normal text-black">Planos  & preços <br /><span className={styles.subtitles_3}> Conferi aqui</span></h1>
            </div>
            <div className={styles.conatiner}>
              <div className={styles.wrap}>


                <div className={styles.box}>
                  <div className={styles.date}>
                    <h4>ECONÔMICO</h4>
                  </div>
                  <div className={styles.poster}>
                    <h6>R$ 49,90</h6>
                    <ul celled className={styles.listItems}>
                    {economico.map(item =>( 
                      <li  key={item.id} className={styles.list}>
                          <div className="text-muted" className={styles.ItemsInfo} >
                            {item.description}
                          </div>
                          <hr  className={styles.line}/>
                      </li>
                          ))} 
                    </ul>
                    <button type="button" className={styles.p1}>teste grátis</button>
                  </div>

                </div>

s
                <div className={styles.box}>
                  <div className={styles.date}>
                    <h4>PLANO PREMIUM</h4>
                  </div>

                  <div className={styles.poster}>
                    <h6>R$ 49,90</h6>
                    <ul celled className={styles.listItems}>
                    {premium.map(item =>( 
                      <li  key={item.id} className={styles.list}>
                          <div className={styles.ItemsInfo} >
                            {item.description}
                          </div>
                          <hr  className={styles.line}/>
                      </li>
                          ))} 
                    </ul>

                    <button type="button" className={styles.p1}>teste grátis</button>

                  </div>
                </div>



                <div className={styles.box}>
                  <div className={styles.date}>
                    <h4>PLANO PLATINA</h4>
                  </div>

                  <div className={styles.poster}>
                    <h6>R$ 49,90</h6>
                    <ul celled className={styles.listItems}>
                    {platina.map(item =>( 
                      <li  key={item.id} className={styles.list}>
                          <div className={styles.ItemsInfo} >
                            {item.description}
                          </div>
                          <hr  className={styles.line}/>
                      </li>
                          ))} 
                    </ul>
                    <button type="button" className={styles.p1}>teste grátis</button>
                  </div>
                </div>     


              </div>
            </div>
          </Col>
        </Row>
    
      </Container>
    </section>
  );
}

export default Plans;