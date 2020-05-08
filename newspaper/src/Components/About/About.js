import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Constants/routes';

const About = () => {
  return (
    <div>
      <div class='subhead'>
        Derdach, Walderlund --
        <Link to={routes.LATEST}> Return</Link>
      </div>
      <div class='collumns'>
        <div class='collumn'>
          <div class='head'>
            <span class='headline hl3'>What is the Waldish Times?</span>
            <p>
              <span class='headline hl4'>
                by Wilfred, Owner of the Waldish Times
              </span>
            </p>
          </div>
          <p>
            The Waldish Times prides itself as the premier newspaper of the
            Walderlund. Our goal as a paper is to report both domestic and
            international news that bears any relevancy to our nation.
          </p>
          <p>
            We pride ourself on humble beginnings, and seek to report with the
            upmost level of transparency and honesty.
          </p>
          <p>
            You may find new editions of our paper at an inconsistent pace at
            this time. To keep up with our paper in a more constant manner, you
            may reach out to us <a href='https://discord.gg/5chw23p'>here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
