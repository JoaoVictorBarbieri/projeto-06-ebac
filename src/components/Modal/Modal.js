import React from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`

const ModalDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #666;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.primary ? '#ff5722' : '#f0f0f0')};
  color: ${(props) => (props.primary ? 'white' : '#333')};
`

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <ModalFooter>
          <ModalButton onClick={onClose}>Cancelar</ModalButton>
          <ModalButton primary>Confirmar</ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
