import React from 'react';

const Head = () => {
  return (
    <div class='head'>
      <div class='headerobjectswrapper'>
        <div class='weatherforcastbox'>
          <span class='font-span'>
            Weather forecast for the next 24 hours: Plenty of Sunshine
          </span>
          <br />
          <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
        </div>
        <header>The Waldish Times</header>
      </div>
    </div>
  );
};

export default Head;
