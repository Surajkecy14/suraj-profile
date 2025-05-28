import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'E-commerce Website',
      description: 'An online store built using React, CSS, and MongoDB.',
      link: 'https://example.com/ecommerce'
    },
    {
      title: 'Chat App',
      description: 'Real-time chat application using Node.js, Socket.io, and React.',
      link: 'https://example.com/chatapp'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using React and Tailwind CSS.',
      link: 'https://example.com/portfolio'
    },
    {
      title: 'Todo App',
      description: 'Simple todo app with add/delete features using React and localStorage.',
      link: 'https://example.com/todo'
    },
    {
      title: 'Freefiire tournment app',
      description: 'Using MERN and full backend',
      link: 'https://example.com/todo'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>These projects are complete but not yet published online. I’ve built them using technologies like React, 
        MongoDB, and Node.js. This section is here to 
        showcase my work and development skills while I prepare them for public launch.</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
