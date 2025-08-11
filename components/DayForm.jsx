"use client";
import { useState, useRef } from 'react'
import Confetti from './confetti'

export default function DayForm({ onAdd }){
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [amount, setAmount] = useState('')
  const confettiRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    const amt = parseFloat(amount || '0')
    const weekday = new Date(date).toLocaleDateString('pl-PL', { weekday: 'long' })
    const day = {
      id: Date.now().toString(),
      date,
      weekday,
      amount: amt,
      entries: []
    }
    onAdd(day)
    if (amt > 0 && confettiRef.current) confettiRef.current.start()
    setAmount('')
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-full text-xs" />
      <input type="number" step="0.01" placeholder="Kwota" value={amount} onChange={e=>setAmount(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-full text-xs" />
      <button className="w-full px-3 py-1 text-xs rounded shadow-sm bg-accent/10 border border-accent text-accent">Dodaj dzień</button>
      <Confetti ref={confettiRef} />
    </form>
  )
}

