"use client";
import { useState } from 'react'

export default function EntryForm({ onAdd, dayId }){
  // domyślna pełna godzina
  const currentHour = new Date().getHours().toString().padStart(2, '0') + ":00";
  const [time, setTime] = useState(currentHour)
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [errors, setErrors] = useState('')

  const hoursList = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2,'0')}:00`);

  function handleImage(e){
    const f = e.target.files?.[0]
    if (f) setImageFile(f)
  }

  function handleSubmit(e){
    e.preventDefault()
    const entry = {
      time,
      description,
      errors,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      id: Date.now().toString()
    }
    onAdd(entry)
    setDescription('')
    setImageFile(null)
    setErrors('')
    setTime(currentHour)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <select value={time} onChange={e=>setTime(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-full text-xs">
        {hoursList.map((h) => (
          <option key={h} value={h} className="bg-panel">{h}</option>
        ))}
      </select>
      <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Opis sytuacji" className="bg-transparent border px-2 py-1 rounded w-full text-xs" />
      <input type="file" accept="image/*" onChange={handleImage} className="text-[11px] w-full" />
      <input value={errors} onChange={e=>setErrors(e.target.value)} placeholder="Błędy (krótko)" className="bg-transparent border px-2 py-1 rounded w-full text-xs" />
      <button className="w-full px-3 py-1 text-xs rounded bg-neon/10 border border-neon text-neon">Dodaj</button>
    </form>
  )
}
