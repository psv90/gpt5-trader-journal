"use client";

import { useState } from 'react'
import DayForm from './DayForm'
import DayCard from './DayCard'

export default function MiddleColumn(){
  const [days, setDays] = useState([])

  function addDay(day){
    setDays(prev => [day, ...prev])
  }

  function addEntry(dayId, entry){
    setDays(prev => prev.map(d => d.id === dayId ? {...d, entries:[entry, ...d.entries]} : d))
  }

  return (
    <div className="space-y-3">
      <DayForm onAdd={addDay} />
      <div className="space-y-2">
        {days.length === 0 && <div className="text-xs text-gray-400">Brak dni — dodaj pierwszy dzień.</div>}
        {days.map(day=>(
          <DayCard key={day.id} day={day} onAddEntry={entry=>addEntry(day.id, entry)} />
        ))}
      </div>
    </div>
  )
}
