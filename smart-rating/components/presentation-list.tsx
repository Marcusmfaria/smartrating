import { Button } from './ui/button'

export function PresentationList({ presentationtions, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {presentations.map((presentation) => (
        <li key={presentation.id} className="border p-4 rounded-md">
          <h3 className="text-lg font-semibold">{presentation.title}</h3>
          <p>Apresentador: {presentation.presenter}</p>
          <div className="mt-2">
            <Button onClick={() => onEdit(presentation)}>Editar</Button>
            <Button variant="destructive" onClick={() => onDelete(presentation.id)}>Excluir</Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

