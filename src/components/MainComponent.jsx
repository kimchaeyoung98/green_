import React from 'react';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';

function MainComponent(){
  return (
    <main id="main">
      <Section1Component/>
      <Section2Component/>
  </main>
  );
};

export default MainComponent;