import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';

function WrapComponent(){
  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <ModalComponent/>
    </div>
  );
};

export default WrapComponent;