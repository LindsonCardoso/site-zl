import React from 'react'
import Layout from '../src/Components/Layort'
import Header from '../src/Components/Header'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Plans from '../src/Components/Plans'

import FadeIn from 'react-fade-in';
import Footer from '../src/Components/Footer'
import Question from '../src/Components/Questions'


const index = () => {
  return (
    <Layout>

        <FadeIn>
            <Header/>
            <Home />
            <About />
            <Plans />
            <Question/>
            <Footer/>
        </FadeIn>
      
    </Layout>
  )
}

export default index
