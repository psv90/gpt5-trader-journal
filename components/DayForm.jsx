'use client'
import { useState, useRef } from 'react'
import Confetti from './confetti'

export default function DayForm({ onAdd }){
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [amount, setAmount] = useState('')
  const confettiRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    const amt = parseFloat(amount || '0')
    const day = {
      id: Date.now().toString(),
      date,
      amount: amt,
      entries: []
    }
    onAdd(day)
    if (amt > 0 && confettiRef.current) confettiRef.current.start()
    setAmount('')
  }

  return (
    <div className="card">
      <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-32 text-xs" />
        <input type="number" step="0.01" placeholder="Kwota" value={amount} onChange={e=>setAmount(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-28 text-xs" />
        <button className="ml-auto px-3 py-1 text-xs rounded shadow-sm bg-accent/10 border border-accent text-accent">Dodaj dzień</button>
      </form>
      <Confetti ref={confettiRef} />
    </div>
  )
}
