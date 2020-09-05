import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/Title.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from 'react-mdl'
import handbook from '../img/Handbook_Cover.png'
import peerCrisisCover from '../img/PeerCrisisCover.png'
import handbookLink from '../Handbook 2020 - Updated.pdf'
import PeerCrisis from '../Peer in Crisis.pdf'
import Calendar from '../components/Calendar'


function Title() {
    return (
        <div>
            <div className="Title-image">
                <div className="hero-text">
                    <h1>Welcome to Skule Mental Wellness</h1><br />
                    <h6>We are a group engineering students that are strong advocates for mental health and wellness. We ensure that the Skule community has access to mental health resources they need. Additionally, we run events, workshops, and fun activities throughout the year to help relieve the stress that comes with being an engineering student.</h6><br />
                    <div class="row">
                        <div class="buttons">
                            <a href="/MentalResources" className="button1">Mental Health Resources</a>
                            <a href="" className="button1">Join Skule Mental Wellness</a>
                            <a href="/AcademicResources" className="button1">Academic Resources</a>


                        </div>
                    </div>
                </div>



            </div>

            <div class="row">
                <div class="events-section">
                    <Calendar />
                </div>

                <div class="pdf-section">
                    <h1>PDF Resources</h1>
                    <div class="item">
                        <img src={handbook} />
                        <h5>SMW Handbook 2020-2021</h5>
                        <p>Read for ways to reduce stress and for some useful resources!</p>
                        <a href={handbookLink} class="button1">Handbook PDF</a>
                    </div>

                    <div class="item">
                        <img src={peerCrisisCover} />
                        <h5>Peer in Crisis Guide</h5>
                        <p>Learn how you can take care of your peers that may be struggling with mental health.</p>
                        <a href={PeerCrisis} class="button1">Guide PDF</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Title