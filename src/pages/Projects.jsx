// src/components/Projects.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function Projects() {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is the first project.',
      image: 'https://via.placeholder.com/150', // Placeholder image
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'This is the second project.',
      image: 'https://via.placeholder.com/150', // Placeholder image
      link: 'https://example.com/project-two'
    },
    {
      title: 'Project Three',
      description: 'This is the third project.',
      image: 'https://via.placeholder.com/150', // Placeholder image
      link: 'https://example.com/project-three'
    }
  ];

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button 
                variant="contained" 
                color="primary" 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ margin: '16px' }}
              >
                View Project
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
