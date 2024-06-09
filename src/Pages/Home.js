import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BannerText from '../Components/BannerText'
import Faq from '../Components/Faq'
import Features from '../Components/Features'
import Advantages from '../Components/Advantages'
import FirstSection from '../Components/FirstSection'
import ClientTestomonial from '../Components/ClientTestomonial'

const Home = () => {
    return (
        <div id="Home">
            <Header />
            <FirstSection />
            <Features />
            <Advantages />
            <ClientTestomonial />
            <Faq />
            <BannerText />
            <Footer />
        </div>
    )
}

export default Home