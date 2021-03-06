import React from "react";
import image_github from '../../assets/Photos/GitHub-Mark.png';
import image_LinkedIn from '../../assets/Photos/LI-In-Bug.png';
import image_twitter from '../../assets/Photos/Twitter_Logo_WhiteOnBlue.png';

function AboutMe() {
  return (
    <div className='container-sm'>
      <div className='aboutMeContainer'>
        <div>
            <h1>Derick Fabert</h1>
            <h5>Full Stack Web Developer</h5>
        </div>
        <div className='aboutMeLinks'>
            <a href='https://dfabert.github.io/DerickFabert/assets/DerickFabertResume.pdf' target= "_blank" rel='noreferrer'><button className="btn btn-primary"  >Resume</button></a>
            <a href="https://github.com/dfabert" target="_blank" rel='noreferrer'><img src={image_github} alt="Github Logo" /></a>
            <a href="https://www.linkedin.com/in/derick-fabert" target="_blank" rel='noreferrer'><img src={image_LinkedIn} alt="LinkedIn Logo" /></a>
            <a href="https://twitter.com/derick_fabert?lang=en" target="_blank" rel='noreferrer'><img src={image_twitter} alt="TwitterLogo" /></a>
        </div>
        <div>
          <div style={{padding: '20px'}} >
            <div>
              <img src="https://github.com/dfabert/DerickFabert/blob/master/assets/Photos/Derick.Fabert.0181-6x8.jpg?raw=true" alt="Derick Fabert" style={{float: "left", margin: "8px", width: "150px"}}/>
            </div>
            <div>
              <p>I am a full stack web developer with broadcast meteorology, management, and real estate experience.  I recently graduated from Butler's Web Development Bootcamp, but my passion for web development actually started several years ago when I was a broadcast meteorologist.  Using a website to communicate with our viewers facinated me.  </p>
              <p>I bugged the web manager at work so much that he eventually gave me administrative privileges and set up a "test bed" for me to play with.  I spend many late nights developing several of what I called "takeovers" for the weather section of the website.  They were to be used when different significant weather events were in the forecast.  On the night before a tornado outbreak, I deployed my first takeover. The next day, as 8 tornadoes tore through our viewing area, we have live coverage on our website and mobile app.</p>
              <p>I left the TV business, but the web development bug never really left.  To build on my skills, I enrolled in Butler's Full Stack Web Development Boot Camp to learn the full power of the tools that the web provides.  Boy, if I could go back and remake those takeovers now.  I really enjoy building web applications and finding new ways to improve them over and over.</p>
              <p>In addition to my Web Development Certificate, I also have a Bachelor of Science degree in Broadcast Meteorology.  For 10 years, I was on-air and became a Chief Meteorologist at the CBS affiliate in central Illinois.  I covered everything from blizzards to tornadoes during that time.  </p>
              <p>I live near Mooresville, Indiana with my wife, Anna.  In my spare time, I enjoy all sports, specifically Indycar, and I also am a novice woodworker.  Similiar to my work in web development, woodworking gives me another opportunity to build and improve projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default AboutMe;
