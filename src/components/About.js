import React, { Component } from 'react';
import '/Users/angyhiggy/smw-website/src/css/About.css'

import angy from '/Users/angyhiggy/smw-website/src/img/team/Angy.png'
import doaa from '/Users/angyhiggy/smw-website/src/img/team/Doaa.png'
import jhanavi from '/Users/angyhiggy/smw-website/src/img/team/Jhanavi.png'
import kayla from '/Users/angyhiggy/smw-website/src/img/team/Kayla.png'
import melanie from '/Users/angyhiggy/smw-website/src/img/team/Melanie.png'
import protiti from '/Users/angyhiggy/smw-website/src/img/team/Protiti.png'
import sabita from '/Users/angyhiggy/smw-website/src/img/team/Sabita.png'
import sonali from '/Users/angyhiggy/smw-website/src/img/team/Sonali.png'
import stephanie from '/Users/angyhiggy/smw-website/src/img/team/Stephanie.png'
import vanessa from '/Users/angyhiggy/smw-website/src/img/team/Vanessa.png'
import yuqi from '/Users/angyhiggy/smw-website/src/img/team/Yuqi.png'
import yuying from '/Users/angyhiggy/smw-website/src/img/team/YuYing.png'


class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>

                <div className="about-heading">
                    <h2>SMW Executive Team 2020-2021</h2>
                </div>


                <div className="team">
                    <div className="row">

                        <div className="subTeam-3">
                            <h4>Marketing</h4>
                            <div className="member">
                                <img src={protiti} />
                                <p><b>Protiti Das - </b>Chem 2T1<br />
                                Marketing Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={sabita} />
                                <p><b>Sabita Tasnim - </b>ECE 2T2<br />
                                Marketing Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={vanessa} />
                                <p><b>Vanessa E Ayoung-Chee - </b>Civ 2T2<br />
                                Marketing Vice Director
                                </p>
                            </div>
                        </div>

                        <div className="subTeam-3">
                            <h4>Events</h4>
                            <div className="member">
                                <img src={melanie} />
                                <p><b>Melanie Tham - </b>Civ 2T2<br />
                                Events Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={jhanavi} />
                                <p><b>Jhanavi Gera - </b>ECE 2T3<br />
                                Events Vice Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={doaa} />
                                <p><b>Doaa Muhammad - </b>ECE 2T3<br />
                                Events Vice Director
                                </p>

                            </div>
                        </div>



                    </div>

                    <div className="row">

                        <div className="subTeam-2">
                            <h4>Communications</h4>
                            <div className="member">
                                <img src={stephanie} />
                                <p><b>Stephanie Obeta - </b>Chem 2T2<br />
                                Communications Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={kayla} />
                                <p><b>Kayla Carnide - </b>Civ 2T3<br />
                                Communications Vice Director
                                </p>
                            </div>
                        </div>


                        <div className="subTeam-2">
                            <h4>Web</h4>
                            <div className="member">
                                <img src={angy} />
                                <p><b>Angy Higgy - </b>ECE 2T2<br />
                                Web Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={yuying} />
                                <p><b>YuYing Liang - </b>EngSci 2T2<br />
                                Web Vice Director
                                </p>
                            </div>
                        </div>

                        <div className="subTeam-2">
                            <h4>Finance</h4>
                            <div className="member">
                                <img src={sonali} />
                                <p><b>Sonali Dey - </b>EngSci 2T1<br />
                                Finance Director
                                </p>
                            </div>

                            <div className="member">
                                <img src={yuqi} />
                                <p><b>Yuqi Zhou - </b>Chem 2T2<br />
                                Finance Vice Director
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>




        );
    }

}

export default About