"use client";
import { useState } from 'react'
import EntryForm from './EntryForm'
import Modal from './Modal'

export default function DayCard({ day, onAddEntry }){
  const [showEntryForm, setShowEntryForm] = useState(false)
  const amountColor = day.amount > 0 ? "text-green-400" : day.amount < 0 ? "text-red-400" : "text-gray-300"

  return (
    <div className="card">
      <div className="flex items-center gap-2">
        <div className="text-xs font-medium">
          {day.date}
          <div className="text-[10px] text-gray-400">{day.weekday}</div>
        </div>
        <div className={`ml-2 text-xs font-semibold ${amountColor}`}>{day.amount.toFixed(2)} PLN</div>
        <button
          className="ml-auto text-xs text-accent"
          onClick={()=>setShowEntryForm(true)}
        >
          Dodaj wpis
        </button>
      </div>

      {showEntryForm && (
        <Modal title="Dodaj wpis" onClose={() => setShowEntryForm(false)}>
          <EntryForm onAdd={(entry) => { onAddEntry(entry); setShowEntryForm(false); }} dayId={day.id} />
        </Modal>
      )}

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
