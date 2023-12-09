'use strict';

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Modal, Button } from 'react-bootstrap';
import '../styles/HamburgerMenu.css';

function HamburgerMenu() {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
      setShowModal(true);
    };

    const handleModalClose = () => {
      setShowModal(false);
    };
  return (
    <>
      <div id='hamburger-menu' onClick={handleModalOpen}>
        <MenuIcon />
      </div>
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        {/* Add your menu content inside Modal.Body */}
        <Modal.Body>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          {/* Add more menu items as needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModalClose}>
            Close
          </Button>
          {/* Add additional buttons or actions if needed */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HamburgerMenu;
