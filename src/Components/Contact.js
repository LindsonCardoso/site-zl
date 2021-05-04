import Head from 'next/head'
import React, {useState} from 'react';
import {
  Container, FormGroup,
} from 'reactstrap';
import FadeIn from 'react-fade-in';
import styles from '../../styles/Components/Contact.module.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [enviar, setEnviar] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando')

    let data = {
      name,
      surname,
      email,
      message
    }

    fetch('/api/Server', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(data)

    }).then((res) => {
      console.log('response received')
      if (res.status === 200) {
        console.log('response succeeded!')
        setEnviar(true);
        setName('');
        setSurname('');
        setEmail('');
        setMessage('');
      }
    })
  }


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
                                 onChange={(e)=> {setName(e.target.value)}} 
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
                                 onChange={(e)=> {setSurname(e.target.value)}} 
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
                                 onChange={(e)=> {setEmail(e.target.value)}} 
                                 placeholder="frank.@.com"                      
                              />
                            </formGroup>  


                            <formGroup className={styles.form_grup}>
                            <label className={styles.title_forme} htmlFor='message'>Mensagem</label>
                            <textarea 
                            className={styles.input_area}
                              type="textarea" 
                               name="message" 
                                id="message" 
                                 onChange={(e)=> {setMessage(e.target.value)}} 
                                 placeholder=""                      
                              />
                            </formGroup>  

                            <input
                             type="submit"
                              className={styles.p1}
                              onClick={(e) => {handleSubmit (e)}}
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
