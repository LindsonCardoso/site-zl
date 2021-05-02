import React from 'react';
import {
  Container,
  Row,
  Col,
  Button, Form, FormGroup, Label, Input, FormText 
} from 'reactstrap';
import FadeIn from 'react-fade-in';
import styles from '../../styles/Components/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section_contact}>
      <Container>
        <FadeIn>

        <div class="animated fadeInUp mt-4">
              <h2 className={styles.title_1}>Solicitar uma acesso</h2>
              <p className={styles.title_2}>Ola laal tsertes skdjaskdaskldaslkd ksjdka skd skd kadj </p>
    
                <div className={styles.cards_list}>
                      <div className={styles.card}>
                  
                        <div className={styles.card_title} className="title-white">
                        <h3>Informe os dados</h3>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
                        </div>

                        <hr  className={styles.line} />
                        <div>
                        <Form>
                            <FormGroup>
                            <div className={styles.card_container}>


                       
                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label for="name">Nome</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input type="text" name="name" id="name" placeholder="Ex: Joao" />
                              </div>

                              
                            </div>   

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label for="name">Sobrenome</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input type="text" name="name" id="name" placeholder="Ex: Carlos" />
                              </div>
                            </div> 

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label for="name">Email</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input type="email" name="email" id="email" placeholder="joaocarlos@exem.com" />
                              </div>
                            </div> 

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label for="msn">Mensagem</Label>
                              </div>
                              <div>
                              
                              <Input className={styles.input_text} type="textarea" name="text" id="caixatexto" placeholder="" />
                              </div>
                            </div> 

                                    <div className={styles.btn_acessar}>
                                      <div className={styles.btn}>
                                      <button type="button" >SOLICITAR ACESSO</button>


                                      </div>
                                   



                                    </div>
                            </div>
                            </FormGroup>

                          
                        </Form>
                      </div>
                      

                      </div>
                    
                  </div>
              
            </div>

      
            
        </FadeIn>
      </Container>
    </section>
  )
}

export default Contact;
