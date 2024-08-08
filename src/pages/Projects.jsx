// src/components/Projects.js
import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is the first project.',
      image: 'https://via.placeholder.com/150', 
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'This is the second project.',
      image: 'https://via.placeholder.com/150', 
      link: 'https://example.com/project-two'
    },
    {
      title: 'Project Three',
      description: 'This is the third project.',
      image: 'https://via.placeholder.com/150', 
      link: 'https://example.com/project-three'
    }
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projectList.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <img src={project.image} alt={project.title} style={{ width: '150px', height: '150px' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
