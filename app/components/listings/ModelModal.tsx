'use client'

import { useState } from 'react'

import Modal from '../modals/Modal'
import useModelModal from '@/app/hooks/useModelModal'
import IframeModel from './IframeModel'

const ModelModal = () => {
  const modelModal = useModelModal()
  const [isLoading, setIsLoading] = useState(false)

  const bodyContent = <IframeModel />

  return (
    <Modal
      disabled={isLoading}
      isOpen={modelModal.isOpen}
      title='Vista 3D'
      onClose={modelModal.onClose}
      body={bodyContent}
    />
  )
}

export default ModelModal
