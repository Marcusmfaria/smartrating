"use client"

import { useState, useEffect } from 'react'
import { PresentationForm } from '@/components/presentation-form'
import { PresentationList } from '@/components/presentation-list'

export default function PresentationsPage() {
  const [presentations, setPresentations] = useState([])

  useEffect(() => {
    // Aqui você faria uma chamada para sua API para buscar as apresentações
    // Por enquanto, vamos usar dados mockados
    setPresentations([
      { id: 1, title: 'Apresentação 1', presenter: 'João', criteria: [{ id: 1, name: 'Clareza', weight: 2 }] },
      { id: 2, title: 'Apresentação 2', presenter: 'Maria', criteria: [{ id: 2, name: 'Conteúdo', weight: 3 }] },
    ])
  }, [])

  const handleSubmit = (newPresentation) => {
    // Aqui você faria uma chamada para sua API para salvar a nova apresentação
    setPresentations([...presentations, { ...newPresentation, id: Date.now() }])
  }

  const handleEdit = (presentation) => {
    // Implementar lógica de edição
    console.log('Editar', presentation)
  }

  const handleDelete = (id) => {
    // Aqui você faria uma chamada para sua API para deletar a apresentação
    setPresentations(presentations.filter(p => p.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Apresentações</h1>
      <PresentationForm onSubmit={handleSubmit} />
      <PresentationList 
        presentations={presentations}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

