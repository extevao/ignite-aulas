import { useState } from "react";

import { GlobalStyle } from "./styles/global";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";



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

      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

