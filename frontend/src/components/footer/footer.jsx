import React from 'react';

const Footer = () => {
    return (
      <div className="footer">
        <section className="footer-repo">
          <a href="https://github.com/galenddavis/whats_cooking">
            <h1>Github Repo</h1>
          </a>
        </section>
        <section className="footer-mern">
          <h3>this site uses</h3>
          <div>
            <i class="fab fa-envira">MongoDB</i>
            <label>
              E<h3>Express</h3>
            </label>
            <i class="fab fa-react">React</i>
            <i class="fab fa-node-js">Node</i>
          </div>
        </section>
        <section className="footer-personal">
          <div>
            <h1>Stephen Yim</h1>
            <a href="https://github.com/stephenhyim" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/stephenhyim/" target="_blank">LinkedIn</a>
            <a href="https://angel.co/u/stephen-yim" target="_blank">AngelList</a>
            <a href="https://github.com/stephenhyim/YouTube-Project" target="_blank">Rails/React project</a>
          </div>
          <div>
            <h1>Gabriel Reiter</h1>
            <a href="https://github.com/greiter18" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/gabriel-reiter-7352b2b7/" target="_blank">LinkedIn</a>
            <a href="https://angel.co/u/gabriel-reiter" target="_blank">AngelList</a>
            <a href="https://github.com/greiter18/Trace" target="_blank">Rails/React project</a>
          </div>
          <div>
            <h1>Galen Davis</h1>
            <a href="https://github.com/galenddavis" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/galenddavis/" target="_blank">LinkedIn</a>
            <a href="https://angel.co/u/galen-davis-1" target="_blank">AngelList</a>
            <a href="https://github.com/galenddavis/final_project" target="_blank">
              Rails/React project
            </a>
          </div>
          <div>
            <h1>Jose Mejia</h1>
            <a href="https://github.com/jmejia247" target="_blank">Github</a>
            <a href="" target="_blank">LinkedIn</a>
            <a href="" target="_blank">Personal Website</a>
            <a href="https://github.com/jmejia247/Harmonic" target="_blank">
              Rails/React project
            </a>
          </div>
        </section>
      </div>
    );
}

export default Footer;
