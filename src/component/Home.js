import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Suraj</span></h1>
        <h2>A MERN Web Developer</h2>
        <p>
          Passionate about building responsive web applications using MongoDB, Express, React, and Node. js.
        </p>
        <Link to="/projects" className="btn">View Projects</Link>
      </div>
    </section>
  );
};

export default Home;
