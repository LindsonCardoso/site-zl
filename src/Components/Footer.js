import React from 'react';
import { Container, Row, Col } from "reactstrap";

import styles from '../../styles/Components/Footer.module.css'


const Footer = () => {
  const links = [
    { id : 1, title : "Sistem",
      child : [
          { title : "LOREM IPSUM", link : "/" },
          { title : "LOREM IPSUM", link : "/" },
          { title : "LOREM IPSUM", link : "/" },
          { title : "LOREM IPSUM", link : "/" }
      ]
    },
    { id : 2, title : "Our Information",
      child : [
          { title : "Contact Us", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Privacy Policy", link : "/" },
      ]
    },
    { id : 3, title : "Suporte",

    child : [
      { title : "Contact Us", link : "/" },
      { title : "FAQs", link : "/" },
      { title : "Privacy Policy", link : "/" },
    ]
    
    
    }
  ];
  
  return (
    <section className={styles.topp} id="about">
      <Container>
        <Row>
          <Col lg={3}>
              <div className="mb-4">         
                <h6 className="text-dark mb-2">Our Address</h6>
                <p className="text-muted f-14">1234 Lorem Ipsum dummy text, 12345</p>
                <p className="text-muted mb-2">email@email.com</p>
                <h6 className="text-muted font-weight-normal">+55 1234-5678-9</h6>
              </div>
          </Col>
          <Col lg={9}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="mb-3" className={styles.title}>{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }                   
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="text-black">2021 © Corporation.<span className="font-weight-medium" className={styles.spa}> ZL Tecnologia</span></p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Footer;