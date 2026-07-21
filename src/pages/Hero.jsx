import React from "react";
import hero from '/src/assets/hero.png'
import avatar1 from '/src/assets/image1.webp'
import avatar2 from '/src/assets/image2.webp'
import avatar3 from '/src/assets/image3.webp'
import avatar4 from '/src/assets/image4.webp'
import avatar5 from '/src/assets/image5.webp'
import avatar6 from '/src/assets/image6.webp'
import avatar7 from '/src/assets/image7.webp'
import logo0 from '/src/assets/brand-logo.png'
import logo1 from '/src/assets/brand-logo1.png'
import logo2 from '/src/assets/brand-logo2.png'
import logo3 from '/src/assets/brand-logo3.png'
import logo4 from '/src/assets/brand-logo4.png'
import Spline from "@splinetool/react-spline";
import '../styles/Hero.css'

function Hero(){
    return(
        <div className="hero-section">
            <span className="meet">Meet</span>
            <div className="hero-up">    
                <div className="hero-heading">
                    <h1>Flow 3.0</h1>
                </div>
            </div>

            <div className="hero-down">
                <div className="hero-mess">
                    <h3>The Fastest Workspace We've Ever Built.</h3>
                    <p>Instead of adding more features, we rebuilt everything around speed, clarity, and focus.</p>
                    <button>Explore What's New</button>
                </div>

                <img className="mobile" src={hero} alt="our mobile app"/>

                <div className="stats">
                    <div className="avatar">
                        <img className="avatar-img" src={avatar1} alt="avatar" />
                        <img className="avatar-img" src={avatar2} alt="avatar" />
                        <img className="avatar-img" src={avatar3} alt="avatar" />
                        <img className="avatar-img" src={avatar4} alt="avatar" />
                        <img className="avatar-img" src={avatar5} alt="avatar" />
                        <img className="avatar-img" src={avatar6} alt="avatar" />
                        <img className="avatar-img" src={avatar7} alt="avatar" />
                    </div>
                    <div className="last-mess">
                        <h3 className="number">522k</h3>
                        <p className="status">Already Upgraded & Continue...</p>
                    </div>
                </div>
            </div>
            <div className="colour-overlay">
                <span className="trustee">Trusted by 340+ Financial Institutions WorldWide</span>
                <div className="brand-logos">
                    <img src={logo0} alt="trusted brands" />
                    <img src={logo1} alt="trusted brands" />
                    <img src={logo2} alt="trusted brands" />
                    <img src={logo3} alt="trusted brands" />
                    <img src={logo4} alt="trusted brands" />
                </div>

                <span className="feature-version">3.0 Features</span>
                <span className="feature-title">Built For People Who Move Fast</span>

                <div className="features">

                    <div className="light-performance">
                        <Spline scene="https://prod.spline.design/7Db1tcdw6t0izkil/scene.splinecode" />
                        <div className="feature-text">
                            <h3>AI Assistant</h3>
                            <p>Generate content, summaries, and asign task to flow for easier automation. Be the orchastrator and let flow do the heavy lifting.</p>
                        </div>
                    </div>

                    <div className="smater-interface">
                        <Spline scene="https://prod.spline.design/7Db1tcdw6t0izkil/scene.splinecode" />
                        <div className="feature-text">
                            <h3>AI Assistant</h3>
                            <p>Generate content, summaries, and asign task to flow for easier automation. Be the orchastrator and let flow do the heavy lifting.</p>
                        </div>
                    </div>

                    <div className="ai-assist">
                        <Spline scene="https://prod.spline.design/7Db1tcdw6t0izkil/scene.splinecode" />
                        <div className="feature-text">
                            <h3>AI Assistant</h3>
                            <p>Generate content, summaries, and asign task to flow for easier automation. Be the orchastrator and let flow do the heavy lifting.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap-container">
                    <span className="feature-version">Roadmap</span>
                    <span className="feature-title">How We Got Here</span>
                </div>
                    <span className="feature-version">Changelog</span>
                    <span className="feature-title new">Everything That's New.</span>
            </div>            
        </div>
    );

}

export default Hero;