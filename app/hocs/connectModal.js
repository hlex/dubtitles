import React from 'react'
import { createModal } from 'react-modal-es'

const customStyles = {
  body: {
    background: '#ffffff',
    borderRadius: '10px',
    overflowY: 'scroll',
    maxHeight: '600px',
    overflowX: 'hidden',
    minHeight: '450px'
  },
  title: {
    textAlign: 'center',
    padding: '10px',
    fontSize: '36px',
    color: '#e8523e'
  },
  content: {}
}

const customUI = (title, children, onClose) => (
  <div style={customStyles.body}>
    <div style={customStyles.title}>{title}</div>
    <div style={customStyles.content}>{children}</div>
  </div>
)

const configs = {
  customUI
}

const { openModal, closeModal, closeAllModal, connectModal } = createModal(
  configs
)
export {
  connectModal,
  openModal,
  closeModal,
  closeAllModal
}
