"use client"

import { useState, useEffect } from 'react'
import { EvaluationForm } from '@/components/evaluation-form'

export default function EvaluationsPage() {
  const [presentations, setPresentations] = useState([])

  useEffect(() => {
    // Aqui você faria uma chamada para sua API para buscar as apresentações
    // Por enquanto, vamos usar dados mockados
    setPresentations([
      { 
        id: 1, 
        title: 'Apresentação 1', 
        presenter: 'João', 
        criteria: [
          { id: 1, name: 'Clareza', weight: 2 },
          { id: 2, name: 'Conteúdo', weight: 3 },
        ] 
      },
      { 
        id: 2, 
        title: 'Apresentação 2', 
        presenter: 'Maria', 
        criteria: [
          { id: 3, name: 'Organização', weight: 2 },
          { id: 4, name: 'Relevância', weight: 3 },
        ] 
      },
    ])
  }, [])

  const handleSubmit = (evaluation) => {
    // Aqui você faria uma chamada para sua API para salvar a avaliação
    console.log('Avaliação submetida:', evaluation)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Realizar Avaliações</h1>
      {presentations.map((presentation) => (
        <EvaluationForm 
          key={presentation.id}
          presentation={presentation}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  )
}

