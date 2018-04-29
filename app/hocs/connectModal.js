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
  <div className='modal-body' style={customStyles.body}>
    <div className='modal-title' style={customStyles.title}>{title}</div>
    <div className='modal-children' style={customStyles.content}>{children}</div>
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
