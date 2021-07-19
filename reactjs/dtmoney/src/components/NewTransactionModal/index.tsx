
import Modal from 'react-modal'
import closeImgm from '../../assets/close.svg'

import { Container } from './styles';


Modal.setAppElement('#root');
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImgm} alt="fechar modal" />
      </button>

      <Container>
        <h2>Modal</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />


        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}