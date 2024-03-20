import React, {useEffect} from 'react';
import Nav from './components/Nav';
import Modal from './components/Modal';
import updateCursorEvents from '../cursor.js';

function ModalApp() {
  useEffect(() => {
    updateCursorEvents();
  })
  
  return (
    <div className='stack'>
      <Nav />
      <Modal />
    </div>
  )
}

export default ModalApp;
