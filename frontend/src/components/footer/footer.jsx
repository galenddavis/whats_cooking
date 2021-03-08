import React from 'react';

const Footer = () => {
    return (
      <div className="footer">
        <section className="footer-repo">
          <a href="https://github.com/galenddavis/whats_cooking" target="_blank" rel="noreferrer">
            <h1>Github Repo</h1>
          </a>
        </section>
        <section className="footer-mern">
          <h3>this site uses</h3>
          <div>
            <i className="fab fa-envira"><h1>MongoDB</h1></i>
            <label>
              E<h3>Express</h3>
            </label>
            <i className="fab fa-react"><h1>React</h1></i>
            <i className="fab fa-node-js"><h1>Node</h1></i>
          </div>
        </section>
        <section className="footer-personal">
          <div>
            <h1>Stephen Yim</h1>
            <a href="https://github.com/stephenhyim" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/stephenhyim/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://angel.co/u/stephen-yim" target="_blank" rel="noreferrer">AngelList</a>
            <a href="https://github.com/stephenhyim/YouTube-Project" target="_blank" rel="noreferrer">Rails/React project</a>
          </div>
          <div>
            <h1>Gabriel Reiter</h1>
            <a href="https://github.com/greiter18" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/gabriel-reiter-7352b2b7/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://angel.co/u/gabriel-reiter" target="_blank" rel="noreferrer">AngelList</a>
            <a href="https://github.com/greiter18/Trace" target="_blank" rel="noreferrer">Rails/React project</a>
          </div>
          <div>
            <h1>Galen Davis</h1>
            <a href="https://github.com/galenddavis" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/galenddavis/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://angel.co/u/galen-davis-1" target="_blank" rel="noreferrer">AngelList</a>
            <a href="https://github.com/galenddavis/final_project" target="_blank" rel="noreferrer">
              Rails/React project
            </a>
          </div>
          <div>
            <h1>Jose Mejia</h1>
            <a href="https://github.com/jmejia247" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/jose-mejia-531907206/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://angel.co/u/jose-mejia-15" target="_blank" rel="noreferrer">AngelList</a>
            <a href="https://github.com/jmejia247/Harmonic" target="_blank" rel="noreferrer">
              Rails/React project
            </a>
          </div>
        </section>
      </div>
    );
}

export default Footer;
