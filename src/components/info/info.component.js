import React from "react";

import "./info.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

class Info extends React.Component {

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render(){
        return (
            <div className="info" >
                <div className="info__community" data-aos="zoom-in-right">
                    <h2 className="title">Community</h2>
                    <p>
                        I believe technology can change lives.
                        I believe in the rapid growth community fosters.
                  </p>
                    <p>
                        Talent is evenly distributed but opportunity isn't and thats why I'm passionate
                        over working with communities that aim to equip underrepresented individuals with technological skills,
                        to build the future they want for themselves.
                  </p>
                    <ul className="info__list">
                        <li className="info__list__item">
                            <h4><a href="#">Participated in Paper Presentation</a></h4><span></span>
                            <p>(Title-Facebook Marketplace: A new tool for effective
                                marketing communication) in 2 days National Conference on “Social Networking: A tool for
                                transition from conventional to contemporary”. </p>
                        </li>
                        <li className="info__list__item">
                            <h4><a href="#">Amazon Services Solution Architect</a></h4><span></span>
                            <p>Completed the Amazon Services Solution Architect certification training of 3 days in
                                association with SoftTech Data Securities.</p>
                        </li>
                    </ul>
                </div>
                <div className="info__speaking" data-aos="zoom-in-left" >
                    <h2 className="title">Speaking</h2>
                    <p>I enjoy sharing knowledge and experiences as I learn.
                    If you'll like me to speak at your event, please <a className="inline-link" href="#contact">send me a message</a>
                    </p>
                    <ul className="info__list">
                        <li className="info__list__item">
                                <h4><a  href="#">Introduction to Block chains and Software Security</a></h4><span></span>
                                <p>Attended a 15 day workshop organized by IIT Kanpur on “Introduction to Block chains and Software Security”.</p>
                            </li>

                        <li className="info__list__item">
                            <h4><a  href="#">Introduction to Information Retrieval and Data Mining</a></h4><span></span>
                            <p>Attended a 15 day workshop organized by IIT Kanpur on “Introduction to Information Retrieval and Data Mining”.</p>
                        </li>

                        <li className="info__list__item">
                            <h4><a  href="#">Programming Contest</a></h4><span></span>
                            <p>Runner-up in Programming Contest arranged by DYPIMR in 2017</p>
                        </li>
                        
                        
                        <li className="info__list__item">
                            <h4><a  href="#">Story Writing Competition</a></h4><span></span>
                            <p>Runner-up in Story Writing Competition organized by Morya Youth Festival in 2019.</p>
                        </li>
                        <li className="info__list__item">
                            <h4><a  href="#">“Fun Riddle” on Actions in Google Assistant.</a></h4><span></span>
                            <p>Developed and successfully published “Fun Riddle” on Actions in Google Assistant.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Info;