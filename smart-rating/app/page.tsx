import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Smart Rating</h1>
      <div className="space-y-4">
        <Link href="/presentations">
          <Button>Gerenciar Apresentações</Button>
        </Link>
        <Link href="/evaluations">
          <Button>Realizar Avaliações</Button>
        </Link>
        <Link href="/results">
          <Button>Ver Resultados</Button>
        </Link>
        <Link href="/about">
          <Button>Sobre a Equipe</Button>
        </Link>
      </div>
    </div>
  )
}

