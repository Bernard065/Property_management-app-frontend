import React from 'react'
import Navbar from '../Navbar/Navbar'
import myImage from '../../images/pexels-vecislavas-popa-1571460.jpg'
import myImage2 from '../../images/pexels-binyamin-mellish-186077.jpg'
import './About.css'

const About = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar />
        </div>
        <div
          style={{
            backgroundColor: "#eaf9ff",
            maxHeight: "100%",
            overflowY: "scroll",
          }}
          className="dashboard-main mh-100 col-10"
        >
          <div>
            <div className="mainContainer">
              <div className="containerA">
                <div className="containerA1">
                  <img src={myImage} alt="house"/>
                </div>
                <div className="containerA2">
                  <p>
                    Due to the fact that landlords frequently manage multiple
                    properties, there is a lot of data that needs to be
                    collected. For landlords to manage properties efficiently,
                    this is essential. It is imperative that the right data and
                    statistics are populated in order to make efficient data
                    management decisions when it comes to the management of
                    data. The Hao platform has been developed to connect
                    individuals who need efficient statistics. This platform has
                    been developed to be easy to use for individuals while
                    having a simple user interface to make the user's life
                    easier.
                  </p>
                </div>
              </div>
              <div className="containerB">
                <div className="containerB1">
                  <p>
                    Transparency and accountability are the hallmarks of the
                    company. As a company, we put a lot of emphasis on
                    Delivering the highest possible service to our clients is
                    our top priority. We listen to what you want and improve on
                    that feature. Feel free to contact us and ask any questions
                    you wish. We are available. We will listen and make the
                    experience better for you.
                  </p>
                </div>
                <div className="containerB2">
                  <img src={myImage2} alt="house"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About