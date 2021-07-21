import { useState } from "react";

import { GlobalStyle } from "./styles/global";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";



export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModal(false)
  }
  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

