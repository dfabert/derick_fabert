import React from "react";
import image_github from '../../assets/Photos/GitHub-Mark.png';
import image_LinkedIn from '../../assets/Photos/LI-In-Bug.png';
import image_twitter from '../../assets/Photos/Twitter_Logo_WhiteOnBlue.png';

function AboutMe() {
  return (
    <div class="container-sm">
      <div class="row">
        <div class="col-sm-9" style={{padding: "50px"}}>
            <h1>Glen Derick Fabert</h1>
          <div>
            <p>I'm Glen Derick Fabert, but I go by Derick.  Welcome to my page.  I am currently a real estate representative for a billboard company, but I am looking to get back to my STEM roots.  For the first 10 years after college, I was a broadcast meteorologist.  During that time, I had some experience in front end web development and it piqued my interest.  A few years later, I am excited to be pursuing a career in web development.</p>
            <p>I recently got married to a wonderful woman named Anna.  We live near Mooresville, IN.  I am originally from Brooklyn, IN, which is about 5 minutes south of Mooresville.  Previously, I lived in Sioux Falls, SD and Champaign, IL, both of which I moved to while pursuing my broadcast meteorology career.</p>
            <p>Weather remains a big passion of mine.  During my time as a broadcast meteorologist, I covered everything from a blizzard that brought 24 inches of snow to Sioux Falls, an EF-3 tornado that tore through the town of Gifford, IL and the drought of 2012, which was the most boring summer.  I was even lucky enough to be named the best mid-market meteorologist in the state of Illinois.</p>
            <p>In my spare time, I enjoy woodworking and Indycar racing.</p>
          </div>
        </div>
        <div class='col-sm-3' style={{padding: "20px"}}>
          <div class = 'links'>
            <a class="btn btn-primary" style={{width: "115px", marginTop: "40px"}}  href="https://dfabert.github.io/DerickFabert/assets/Glen%20Derick%20Fabert%20Resume.pdf" target="_blank" role="button">Resume</a>
          </div>
          <div class = 'links'>
            <a href="https://github.com/dfabert" target="_blank"><img style={{width: "115px", marginTop: "40px"}} src={image_github} alt="Github Logo" /></a>
          </div>
          <div class = 'links'>
            <a href="https://www.linkedin.com/in/derick-fabert" target="_blank"><img style={{width: "115px", marginTop: "40px"}} src={image_LinkedIn} alt="LinkedIn Logo" /></a>
          </div>
          <div class = 'links'>
            <a href="https://twitter.com/derick_fabert?lang=en" target="_blank"><img style={{width: "115px", marginTop: "40px"}} src={image_twitter} alt="TwitterLogo" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
