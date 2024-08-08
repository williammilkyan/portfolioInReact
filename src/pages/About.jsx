// src/components/About.js
import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import myPicture from '/src/pic/william.jpg';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
}));

function About() {
  return (
    <StyledContainer>
      <StyledAvatar alt="William Yan" src={myPicture} />
      <StyledBox>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h6" paragraph>
          Hi, I'm William Yan, a passionate Full Stack Web Developer.
        </Typography>
        <Typography variant="body1" paragraph>
          I am experienced in designing and developing scalable web applications, proficient in front-end and back-end technologies including React, Node.js, and SQL databases. I have a proven ability to optimize performance and enhance user experience. Currently, I am seeking to leverage my technical skills and experience in a dynamic development team.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Technical Skills
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Front-end:</strong> JavaScript ES2015+, React.js, Next.js, Jest, HTML5, CSS3/SASS/SCSS
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Back-end:</strong> TypeScript, Node.js, Express.js, TypeORM, mongoose, prisma
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Developer Tools:</strong> Git, GitHub, GitLab, Git Bash, JIRA, CI/CD, Docker
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Database:</strong> MySQL, MSSQL Server, MongoDB (NoSQL)
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Libraries:</strong> Material UI, Bootstrap, Tailwind
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Others:</strong> Microservice backend, Restful APIs architecture, Automation test, Jest, RTL, OOP, TDD concept, Axios, Passport.js, SEO, SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Professional Experience
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Full Stack Developer | Yonge IT Solutions | Toronto, ON</strong> (Nov 2022 – Present)
          <ul>
            <li>Developed a web-based e-commerce SaaS platform enabling businesses and freelancers to create and build websites for selling products and services in a SaaS model.</li>
            <li>Designed and developed product upload and creation services within an admin portal ensuring high efficiency and an easy-to-use UI using Material UI.</li>
            <li>Developed SPA by using React (Redux Redux-Form) for qualified users to access and edit online materials and activities.</li>
            <li>Implemented tables and forms using React Hook Form validated user inputs via yup library to enhance application performance.</li>
            <li>Designed backend relational database structures and implemented the API access points using Typescript.</li>
            <li>Fetched and manipulated standard JSON data following Restful APIs and CRUD operations.</li>
            <li>Structured model and migrated data by using TypeORM and MySQL.</li>
            <li>Designed and implemented an imaging compression tagging and application microservice leveraging OpenAI Vision API and Google Cloud API streamlining image processing within a SaaS environment.</li>
            <li>Developed microservices architecture for a high-traffic SaaS platform achieving a 30% reduction in response time and enabling horizontal scaling for peak season demand.</li>
            <li>Employed React Hook Form to build tables and forms enhancing application performance and validating user inputs through the Yup validation.</li>
            <li>Optimized database performance by fine-tuning SQL queries pagination and implementing Redis caching mechanisms resulting in a 30% reduction in overall database response time and improved system scalability.</li>
            <li>Collaborated with cross-functional teams to define API specifications and documentation standards ensuring consistency and ease of use for both internal and external developers.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Senior Commercial Technician | Espressotec Sale & Service | Vancouver, BC</strong> (Jun 2015 – Nov 2022)
          <ul>
            <li>Led the troubleshooting and repair of coffee appliances on-site ensuring high levels of customer satisfaction and service efficiency.</li>
            <li>Conducted research, testing, and modification of programmable microcontrollers within commercial-grade appliances utilizing a variety of programming languages to enhance functionality and performance as manufacturer requests.</li>
          </ul>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>British Columbia Institute of Technology</strong>, Burnaby, BC
          <br />
          Diploma in Electrical and Computer Engineering (Jan. 2011 – May 2015)
        </Typography>
      </StyledBox>
    </StyledContainer>
  );
}

export default About;
