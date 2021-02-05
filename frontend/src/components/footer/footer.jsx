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
            <h1>Stephen "cool cool cool" Yim</h1>
            <a href="https://github.com/stephenhyim">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Personal Website</a>
            <a href="">Rails/React project</a>
          </div>
          <div>
            <h1>Gabriel "bigtime" Reiter</h1>
            <a href="https://github.com/greiter18">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Personal Website</a>
            <a href="https://github.com/greiter18/Trace">Rails/React project</a>
          </div>
          <div>
            <h1>Galen "lets take a look at it" Davis</h1>
            <a href="https://github.com/galenddavis">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Personal Website</a>
            <a href="https://github.com/galenddavis/final_project">
              Rails/React project
            </a>
          </div>
          <div>
            <h1>Jose "Jose Mejia" Mejia</h1>
            <a href="https://github.com/jmejia247">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Personal Website</a>
            <a href="https://github.com/jmejia247/Harmonic">
              Rails/React project
            </a>
          </div>
        </section>
      </div>
    );
}

export default Footer;
