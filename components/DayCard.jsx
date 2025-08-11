'use client'
import { useState } from 'react'
import EntryForm from './EntryForm'

export default function DayCard({ day, onAddEntry }){
  const [open, setOpen] = useState(false)
  return (
    <div className="card">
      <div className="flex items-center gap-2">
        <div className="text-xs font-medium">{day.date}</div>
        <div className="ml-2 text-xs">{day.amount.toFixed(2)} PLN</div>
        <button className="ml-auto text-xs text-accent" onClick={()=>setOpen(o=>!o)}>{open ? 'Ukryj' : 'Dodaj wpis'}</button>
      </div>
      {open && <EntryForm onAdd={(entry)=>{ onAddEntry(entry) }} dayId={day.id} />}
      <div className="mt-2 space-y-1">
        {day.entries.map((e,i)=>(
          <div key={i} className="text-xs border-t pt-1">
            <div className="flex items-center justify-between">
              <div>{e.time} — {e.description}</div>
            </div>
            {e.image && <img src={e.image} alt="wykres" className="mt-1 max-h-28 object-contain w-full" />}
            {e.errors && <div className="mt-1 text-rose-400 text-[11px]">Błędy: {e.errors}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
