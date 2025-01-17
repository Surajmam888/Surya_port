import React from "react";
import "./Resume.css";
import ResumeD from "./SurajSaketResume.pdf";

const Resumer = () => {
  return (
    <section id="Resume">
      <h2 className="ResumeTitle">Resume</h2>
      <span className="ResumeTitles">Resume</span>
      <span className="ResumeDesc">
        To secure a promising position that offers a challenge and a good
        opportunity for growth. Utilizing my technical skills to implement
        innovative ideas and meanwhile benefit the team with my analytical and
        logical abilities.
      </span>

      <div className="boxContainer">
        <div className="box">
          <h2>2014-2017</h2>
          <h3>Computer Science Enginnering(Diploma)</h3>
          <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
          <span>
          Suraj Saket pursued a Diploma in Computer Science Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya between 2014 and 2017. During this time, he gained foundational knowledge in programming, algorithms, and computer systems, building a strong technical base. This diploma laid the groundwork for his future academic and professional endeavors in the tech industry.
          </span>
        </div>
        <div className="box">
          <h2>2017-2020</h2>
          <h3>Bachelor of Engineering </h3>
          <p>Takshshila Intitute OF Engineering and Technology Jabalpur</p>
          <span>
          From 2017 to 2020, Suraj Saket pursued a Bachelor of Engineering in Computer Science at Takshshila Institute of Engineering and Technology, Jabalpur. This program deepened his understanding of advanced programming, data structures, and software development. It also equipped him with problem-solving and analytical skills, preparing him for a successful career in technology.
          </span>
        </div>
        <div className="box">
          <h2>2020-2023</h2>
          <h3>Master of Technology</h3>
          <p>Takshshila Intitute OF Engineering and Technology Jabalpur</p>
          <span>
          Suraj Saket enrolled in the Master of Technology program at Takshshila Institute of Engineering and Technology, Jabalpur, from 2020 to 2023. During this period, he focused on advanced concepts in computer science, including research and innovation in emerging technologies. Though he couldn't complete the program, it enhanced his technical acumen significantly.
          </span>
        </div>
        <div className="box">
          <h2>2023-2024[July-July]</h2>
          <h3>React.js Developer</h3>
          <p>Mactosys Software Technology pvt. ltd Indore</p>
          <span>
          From July 2023 to July 2024, Suraj Saket worked as a React.js Developer at Mactosys Software Technology Pvt. Ltd., Indore. During this time, he developed dynamic web applications, optimized user interfaces, and collaborated with cross-functional teams. This role honed his expertise in React.js, Material-UI, and API integration, enhancing his professional skills.
          </span>
        </div>
      </div>

      <div className="CVbtns">
        <a href={ResumeD}>
          <button className="CVbtn">DOWNLOAD CV</button>
        </a>
      </div>
    </section>
  );
};

export default Resumer;
