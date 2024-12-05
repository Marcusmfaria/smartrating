"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function PresentationForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [presenter, setPresenter] = useState('')
  const [criteria, setCriteria] = useState([{ name: '', weight: 1 }])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, presenter, criteria })
    setTitle('')
    setPresenter('')
    setCriteria([{ name: '', weight: 1 }])
  }

  const addCriteria = () => {
    setCriteria([...criteria, { name: '', weight: 1 }])
  }

  const updateCriteria = (index, field, value) => {
    const newCriteria = [...criteria]
    newCriteria[index][field] = value
    setCriteria(newCriteria)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Título da Apresentação</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="presenter">Apresentador</Label>
        <Input
          id="presenter"
          value={presenter}
          onChange={(e) => setPresenter(e.target.value)}
          required
        />
      </div>
      {criteria.map((criterion, index) => (
        <div key={index} className="flex space-x-2">
          <div className="flex-grow">
            <Label htmlFor={`criterion-${index}`}>Critério</Label>
            <Input
              id={`criterion-${index}`}
              value={criterion.name}
              onChange={(e) => updateCriteria(index, 'name', e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={`weight-${index}`}>Peso</Label>
            <Input
              id={`weight-${index}`}
              type="number"
              min="1"
              max="10"
              value={criterion.weight}
              onChange={(e) => updateCriteria(index, 'weight', Number(e.target.value))}
              required
            />
          </div>
        </div>
      ))}
      <Button type="button" onClick={addCriteria}>Adicionar Critério</Button>
      <Button type="submit">Cadastrar Apresentação</Button>
    </form>
  )
}

