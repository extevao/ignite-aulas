import { useState } from "react";

import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModal(false)
  }
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      >
        <h1>Modal</h1>
      </Modal>
      <GlobalStyle />
    </>
  );
}

