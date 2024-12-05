export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Sobre a Equipe</h1>
        <p className="mb-4">
          Nossa equipe é composta por profissionais dedicados e apaixonados por tecnologia e educação. 
          Trabalhamos incansavelmente para desenvolver ferramentas que facilitem o processo de avaliação 
          e melhorem a experiência de apresentações em eventos acadêmicos, corporativos e educacionais.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Membros da Equipe:</h2>
        <ul className="list-disc list-inside">
          <li>Eduardo Silva</li>
          <li>João Matheus</li>
          <li>Marcus de Faria </li>
        </ul>
      </div>
    )
  }
  
  