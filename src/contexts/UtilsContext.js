import React, { createContext, useState } from 'react';
import { InfoModal } from '../components';

export const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const openModal = message => {
    setModalMessage(message);
    setModalShow(true);
  };

  return (
    <UtilsContext.Provider value={{ openModal, setModalShow }}>
      <InfoModal show={modalShow} message={modalMessage} />
      {children}
    </UtilsContext.Provider>
  );
};
