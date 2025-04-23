import React, { useState } from 'react'
import Modal from './Modal'

const ProdutoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Adicionar ao Carrinho
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="La Dolce Vita Trattoria"
        description="Pista Nuggets: A pesca, bocca e alma salsa del bosco..."
      />
    </div>
  )
}

export default ProdutoModal
