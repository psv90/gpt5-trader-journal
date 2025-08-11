export default function LeftPanel() {
  const rules = [
    'Notuj wszystko - daty, kwoty, emocje.',
    'Każdy dzień ma co najmniej jeden wpis.',
    'Pozytywne dni oznaczyć dla analizy.',
    'Analizuj błędy — zapisuj przyczyny.'
  ]
  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-accent mb-2">Zasady</h3>
      <ul className="text-xs space-y-1">
        {rules.map((r,i)=>(
          <li key={i} className="flex items-start gap-2">
            <span className="w-2 h-2 mt-1 rounded-full bg-neon inline-block"></span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
