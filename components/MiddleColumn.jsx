"use client";

import { useState } from 'react'
import DayForm from './DayForm'
import DayCard from './DayCard'
import Modal from './Modal'

export default function MiddleColumn(){
  const [days, setDays] = useState([])
  const [showDayForm, setShowDayForm] = useState(false)

  function addDay(day){
    setDays(prev => [day, ...prev])
  }

  function addEntry(dayId, entry){
    setDays(prev => prev.map(d => d.id === dayId ? {...d, entries:[entry, ...d.entries]} : d))
  }

  return (
    <div className="space-y-3">
      <button
        onClick={() => setShowDayForm(true)}
        className="px-3 py-1 text-xs rounded shadow-sm bg-accent/10 border border-accent text-accent"
      >
        Dodaj dzień
      </button>

      {showDayForm && (
        <Modal title="Dodaj dzień" onClose={() => setShowDayForm(false)}>
          <DayForm onAdd={(day) => { addDay(day); setShowDayForm(false); }} />
        </Modal>
      )}

      <div className="space-y-2">
        {days.length === 0 && <div className="text-xs text-gray-400">Brak dni — dodaj pierwszy dzień.</div>}
        {days.map(day=>(
          <DayCard key={day.id} day={day} onAddEntry={entry=>addEntry(day.id, entry)} />
        ))}
      </div>
    </div>
  )
}
