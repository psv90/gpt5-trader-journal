'use client'
import { useState } from 'react'

export default function EntryForm({ onAdd, dayId }){
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}))
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [errors, setErrors] = useState('')

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
    // reset compactly
    setDescription('')
    setImageFile(null)
    setErrors('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 space-y-2">
      <div className="flex gap-2">
        <input value={time} onChange={e=>setTime(e.target.value)} className="bg-transparent border px-2 py-1 rounded w-20 text-xs" />
        <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Opis sytuacji" className="bg-transparent border px-2 py-1 rounded flex-1 text-xs" />
      </div>
      <div className="flex gap-2 items-center">
        <input type="file" accept="image/*" onChange={handleImage} className="text-[11px]" />
        <input value={errors} onChange={e=>setErrors(e.target.value)} placeholder="Błędy (krótko)" className="bg-transparent border px-2 py-1 rounded text-xs flex-1" />
        <button className="px-3 py-1 text-xs rounded bg-neon/10 border border-neon text-neon">Dodaj</button>
      </div>
    </form>
  )
}
