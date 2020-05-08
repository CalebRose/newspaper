import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../Constants/routes';

const Body = () => {
  return (
    <div>
      <div class='subhead'>
        Derdach, Walderlund - Thursday Mai 8th, 4e 64 --
        <Link to={routes.ABOUT}>About</Link>
      </div>
      <div class='content'>
        <div class='collumns'>
          <div class='collumn'>
            <div class='head'>
              <span class='headline hl3'>Beyond the Gol</span>
              <p>
                <span class='headline hl4'>by FRANCIS ARCHIBALD</span>
              </p>
            </div>
            <p>
              The trade winds blow south for the New Gol Republic. Earlier this
              week, Golic senator Maurice Dechaunne signed a groundbreaking deal
              with Taur Zola, the governor of Sabelle, to permit the New Gol
              Republic to moderate and run mining operations in the region. The
              New Gol Republic will ship equipment for Akhoran mining companies
              for use within quarries, with the intention of Golic supervisors
              overseeing operations and use of said equipment.
            </p>
            <p>
              The North Akhoran regions have been reknowned for it's rich
              minerals and quality of materials. Through this deal, the New Gol
              Republic seeks to revolutionize it's production and keep up with
              neighboring nations in what is an industrial race of power.
            </p>
            <p>
              The trade deal is also a sign for peace in the region between the
              Republic and region. For years in the third era, the region
              remained under turmoil from imperialist conflict between the New
              Gol Republic, the Triptych Church, and the Walderlund. The
              conflict came to a close during the twilight years of the Third
              Era when the Triptych Church regressed and the Waldish drove the
              Golic transplants from Sabelle and neighboring coastal towns. When
              the Walderlund had Golic leader Denault sign the peace agreement
              between the two nations, it was implied that the Walderlund would
              return the North Akhoran territories under Golic rule, under the
              condition that the territory remain autonomous.
            </p>
            <p>
              Waldish congressmen have pointed to the trade deal as infringment
              and violation of the peace agreed between the Waldish and the
              Golic. Golic representatives have stated the trade agreement
              between Maurice Dechaunne and Taur Zola does not infringe on the
              peace treaty signed well ago. Akhoran towns such as Sabelle will
              retain autonomy on all mining operations, and will act independent
              in the appointment of Golic supervisors. By providing
              state-of-the-art Golic equipment, the new Gol hopes to reinvest in
              the region and in its natural resources.
            </p>
            <p></p>
            <figure className='figure'>
              <img
                className='media'
                src='https://www.art-prints-on-demand.com/kunst/_frenchphotographer/ansicht-der-pariser-oper-ende-des-19-jahrhunderts.jpg'
              />
              <figcaption class='figcaption'>
                "Vernir, Capital of the New Gol Republic."
              </figcaption>
            </figure>
          </div>
          <div class='collumn hero'>
            <div class='body-header'>FULL STEAM AHEAD!</div>
            <img src='https://collections.museumvictoria.com.au/content/media/47/154297-large.jpg' />
            <div class='small-collumn tile'>
              <div class='head'>
                <span class='headline hl1'>Latest Train from Vanderfeight</span>
                <p>
                  <span class='headline hl2'>by Viktor Ahrenwall</span>
                </p>
              </div>
              <p>
                Erwin Vanderfeight of Freightreight Industries has followed on
                his promise to provide more commercial options in the
                Walderlund, Rubinia, and Halvania. With the release of his
                latest model train, the railroad magnate will be providing
                faster and smoother transport on new routes looking to open by
                the end of the spring season.
              </p>
              <p>
                The latest train -- The Bold Badger -- is said to reach a top
                speed of over 160 kilometers per hour. An astounding benchmark
                for rail enthusiasts and the industry itself.
              </p>
              <p>
                When asked on how his trains are able to reach higher speeds,
                Erwin quoted "I recommend it best that I not indulge on our
                trade secrets, as to remain ahead of my competitors."
              </p>
              <p>
                The industry has struggled to meet demand of faster and
                efficient trains for both commercial and economic purposes. The
                unveiling of this new locomotive from Freightreight Industries
                looks to turn public interest on rail transport in a more
                positive light, especially regarding the tragic railroad
                incident in Amneer not too long ago.
              </p>
              <p>
                The Bold Badger is scheduled to depart on its maiden voyage by
                the end of the spring season, on a route spanning from Rubinia
                westward to the New Gol Republic.
              </p>
            </div>
          </div>
          <div class='collumn'>
            <div class='head'>
              <span class='headline hl5'>What Lights the Streets</span>
              <p>
                <span class='headline hl4'>by Kaitlyn Schmidt</span>
              </p>
            </div>
            <p>
              The sunset faded to twilight, bidding us all adieu. Yet the
              streets of Derdach remain active through the night. The shops may
              close and offices may shut, but life thrives on the streets.
              Nothing out of the ordinary, and nothing of fanfare. What remains
              different about these nightly scenes are our eyes to the
              spectacle! Light that shines that reflecting upon the sun! It is
              not the lantern of yesteryear, no. Rather, grand inventions from
              the Halvanian mind, Meister Turen Funke: a lightbulb.
            </p>
            <p>
              Funke, a former blacksmith, took up his tongs and placed it upon
              himself to light his own quarters without the need of candle.
              After numerous contraptions contracting and consecuentually
              crumbling the formerly proclaimed mad scientist harnessed light
              fueled by incandescense, copper, and tungsten within its glassed
              contraption (Try blurting that out with your tongue)! Mad Funke
              was, upon a flicker he became anything but! A man who has
              rightfully earned the last laugh! And now his lightbulb,
              previously seen at the World's Fair in Gardenia, now illuminate
              Derdach's darkest nights, the very streets of the Waldish capital!
            </p>
            <p>
              Turen Funke is currently funded by the Gardenian Republic of
              Halvania; but has followed through on a promise to the Halvanian
              king to light all Halvanian cities by the end of the year. The
              installation of these new lampposts in Derdach ensures that Funke
              holds greater ambitions: not only enlighten Halvania, to bring his
              Waldish brothers alongside him into the 4th era, and perhaps all
              of Reges as well. How magnificent it is, for our capital to follow
              one of Halvania's brightest minds into a golden era of innovation.
            </p>
          </div>
          {/* <div class='collumn'>
          <div class='head'>
            <span class='headline hl1'>May the Force be with you</span>
            <p>
              <span class='headline hl2'>
                Let go your conscious self and act on instinct
              </span>
            </p>
          </div>
          <p>
            Partially, but it also obeys your commands. Hey, Luke! May the Force
            be with you. I have traced the Rebel spies to her. Now she is my
            only link to finding their secret base.
          </p>
          <figure class='figure'>
            <img
              class='media'
              src='http://i.giphy.com/4fDWVPMoSyhgc.gif'
              alt=''
            />
            <figcaption class='figcaption'>
              "This time, let go your conscious self and act on instinct."
            </figcaption>
          </figure>
          <p>
            Leave that to me. Send a distress signal, and inform the Senate that
            all on board were killed.{' '}
            <span class='citation'>
              "Don't under&shy;estimate the Force. I suggest you try it again,
              Luke."
            </span>{' '}
            This time, let go your conscious self and act on instinct. In my
            experience, there is no such thing as luck. You're all clear, kid.
            Let's blow this thing and go home!
          </p>
          <p>
            You don't believe in the Force, do you? Partially, but it also obeys
            your commands. The plans you refer to will soon be back in our
            hands. As you wish.
          </p>
        </div> */}
          {/* <div class='collumn'>
          <div class='head'>
            <span class='headline hl3'>The buzz of the little world </span>
            <p>
              <span class='headline hl4'>A thousand unknown plants</span>
            </p>
          </div>
          <p>
            I should be incapable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream; and, as I lie close to the earth, a thousand unknown plants
            are noticed by me: when I hear the buzz of the little world among
            the stalks, and grow familiar with the countless indescribable forms
            of the insects and flies, then I feel the presence of the Almighty,
            who formed us in his own image, and the breath
          </p>
        </div>
        <div class='collumn'> */}
          {/* <div class='head'>
            <span class='headline hl1'>It wasn't a dream </span>
            <p>
              <span class='headline hl4'>by FRANZ KAFKA</span>
            </p>
          </div>
          <p>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment.{' '}
          </p>

          <p>
            His many legs, pitifully thin compared with the size of the rest of
            him, waved about helplessly as he looked. "What's happened to me?"
            he thought. It wasn't a dream. His room, a proper human room
            although a little too small, lay peacefully between its four
            familiar walls. A collection of textile samples lay spread out on
            the table - Samsa was a travelling salesman - and above it there
            hung a picture that he had recently cut out of an illustrated
            magazine and housed in a nice, gilded frame. It showed a lady fitted
            out with a fur hat and fur boa who sat upright, raising a heavy fur
            muff that covered the whole of her lower arm towards the viewer.
            Gregor then turned to look out the window at the dull weather.{' '}
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
