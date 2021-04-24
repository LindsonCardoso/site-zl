import React from 'react';
import { Accordion, Card } from "react-bootstrap";

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../../../styles/Components/Accord.module.css'
export default function Accour() {
    return (
           <div>
                <>
                <div>
                    <Accordion className={styles.Container}>

                        <Card  className={styles.Card__one}>
                            <Accordion.Toggle as={Card.Header} className={styles.Accordion__tog} eventKey="0">
                            Como faço para tirar dúvidas sobre o sistema
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Nossa equipe de atendimento está à disposição para suas dúvidas. Acesse o link do "contato" no menu superior e envie sua mensagem ou entre em contato pelo telefone. O disponibiliza manuais e vídeos explicativos, com as configurações necessárias e funcionamento de todos os módulos do sistema. Quer ter uma visão geral do sistema? Acesse nosso vídeo: Apresentação</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card  className={styles.Card__one}>
                            <Accordion.Toggle as={Card.Header} className={styles.Accordion__tog} eventKey="1" >
                            Existe algum custo de instalação?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card  className={styles.Card__one}>
                            <Accordion.Toggle as={Card.Header} className={styles.Accordion__tog} eventKey="1" >
                            Existe algum custo de instalação?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card  className={styles.Card__one}>
                            <Accordion.Toggle as={Card.Header} className={styles.Accordion__tog} eventKey="1" >
                            Existe algum custo de instalação?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>
                </div>
            </>
             </div>
    );
}