import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import '../Pages/About.css'


const AboutUs = () => {
    return (
        <div> <Header />
        {/* <Footer/> */}
            <h4>ESSENTIAL BUYER’S GUIDE</h4>

            <h4><em>The best narrative </em>adventure games
                on PS4 and PS5.</h4>
            <br></br><br></br>
            <h4>From so-called 'walking simulators' to visual novels
                <br></br> and cinematic branching-narrative adventures, discover
                <br></br> some of the most compelling story-focused games on PlayStation.</h4>
            <div class="grid-containers">
                <div class="item1">
                <img src="https://s.alicdn.com/@sc04/kf/Hb0afea14f4f4418782316d205f8f5158s.jpg_300x300.jpg" alt="" width="200" height="333"/>
                </div>
                <div class="item2">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/days-gone-hero-section-background-desktop-tablet-01-ps4-en-19mar19?$2400px$" alt="" width="200" height="333"/>
                </div>
                <div class="item3">
                <img src="https://gmedia.playstation.com/is/image/SIEPDC/cod-mwii-screenshot-07-en-9jun22?$1600px$" alt="" width="500" height="333"/>
                </div>
            </div>
        </div>


    )
}

export default AboutUs