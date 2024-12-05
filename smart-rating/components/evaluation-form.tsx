"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function EvaluationForm({ presentation, onSubmit }) {
  const [scores, setScores] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ presentationId: presentation.id, scores })
    setScores({})
  }

  const updateScore = (criterionId, score) => {
    setScores({ ...scores, [criterionId]: score })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">{presentation.title}</h3>
      <p>Apresentador: {presentation.presenter}</p>
      {presentation.criteria.map((criterion) => (
        <div key={criterion.id}>
          <Label htmlFor={`score-${criterion.id}`}>{criterion.name} (Peso: {criterion.weight})</Label>
          <Input
            id={`score-${criterion.id}`}
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={scores[criterion.id] || ''}
            onChange={(e) => updateScore(criterion.id, Number(e.target.value))}
            required
          />
        </div>
      ))}
      <Button type="submit">Enviar Avaliação</Button>
    </form>
  )
}

