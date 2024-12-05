
import { useState, useEffect } from 'react'

export default function ResultsPage() {
  const [results, setResults] = useState([])

  useEffect(() => {
    // Aqui você faria uma chamada para sua API para buscar os resultados em tempo real
    // Por enquanto, vamos usar dados mockados
    const mockResults = [
      { id: 1, title: 'Apresentação 1', presenter: 'João', averageScore: 8.5 },
      { id: 2, title: 'Apresentação 2', presenter: 'Maria', averageScore: 9.2 },
    ]
    setResults(mockResults)

    // Simular atualizações em tempo real
    const interval = setInterval(() => {
      setResults(prevResults => 
        prevResults.map(result => ({
          ...result,
          averageScore: Math.min(10, result.averageScore + Math.random() * 0.1)
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resultados em Tempo Real</h1>
      <ul className="space-y-4">
        {results.map((result) => (
          <li key={result.id} className="border p-4 rounded-md">
            <h3 className="text-lg font-semibold">{result.title}</h3>
            <p>Apresentador: {result.presenter}</p>
            <p>Nota Média: {result.averageScore.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

