import Head from 'next/head'
import React, {useState} from 'react';
import {
  Container, FormGroup,
} from 'reactstrap';
import FadeIn from 'react-fade-in';
import styles from '../../styles/Components/Contact.module.css';
import Mask from '../Components/MaskInput/Mask'
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


                        <div >
                          <form>

                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='name'>Nome</label>
                            <input 
                            className={styles.input_form}
                              type="text" 
                               name="name" 
                                id="name" 
                                
                                 placeholder="Joao"                      
                              />
                            </formGroup>  

                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='surname'>Sobrenome</label>
                            <input 
                            className={styles.input_form}
                              type="text" 
                               name="surname" 
                                id="surname" 
                           
                                 placeholder="Carlos"                      
                              />
                            </formGroup>  

                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='email'>Email</label>
                            <input 
                            className={styles.input_form}
                              type="text" 
                               name="email" 
                                id="email" 
                                 //onChange={(e)=> {setEmail(e.target.value)}} 
                                 placeholder="teste@teste.com"                      
                              />
                            </formGroup>  

                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='cnpj'>CPF ou CNPJ</label>
                            <Mask />
                            </formGroup>  

                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='email'>telefone</label>
                            <input 
                            className={styles.input_form}
                              type="telefone" 
                               name="tel" 
                                id="tel" 
                                 //onChange={(e)=> {setEmail(e.target.value)}} 
                                 placeholder=""                      
                              />
                            </formGroup>  

                     
                            
                

                            <input
                             type="submit"
                              className={styles.p1}
                              //onClick={(e) => {handleSubmit (e)}}
                              />



                          </form>
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
