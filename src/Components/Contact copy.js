import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Button, Form, FormGroup, Label, Input, FormText 
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

    fetch('./Form/Form', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json'
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
        setBody('');
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
                        <div>
                        <Form>
                            <FormGroup>
                            <div className={styles.card_container}>


                          
                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label htmlfor="name">Nome</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input 
                              type="text" 
                               name="name" 
                                id="name" 
                                 onChange={(e)=> {setName(e.target.value)}} 
                                 placeholder="Ex: Joao"                      
                              />
                              </div>         
                            </div>   

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label htmlfor="name">Sobrenome</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input
                                type="text" 
                                 name="name" 
                                   id="name"
                                   onChange={(e)=> {setSurname(e.target.value)}} 
                                     placeholder="Ex: Carlos" 

                              />
                              </div>
                            </div> 

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label htmlfor="email">Email</Label>
                              </div>
                              <div className={styles.input_form}>
                              <Input 
                              type="email"
                               name="email"
                                id="email"
                                 onChange={(e)=> {setEmail(e.target.value)}} 
                                  placeholder="joaocarlos@exem.com"
                              />
                              </div>
                            </div> 

                            <div className={styles.form_grup}>
                              <div className={styles.title_forme}>
                                <Label htmlfor="message">Mensagem</Label>
                              </div>
                              <div>
                              
                              <Input 
                              className={styles.input_text} 
                               type="textarea"
                                name="massage"
                                 id="caixatexto"
                                  onChange={(e)=> {setMessage(e.target.value)}} 
                                   placeholder=""
                               />
                              </div>
                            </div> 

                            </div>
                            <Input type="submit" onClick={(e) => {handleSubmit (e)}} className={styles.p1} >SOLICITAR ACESSO</Input>

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
