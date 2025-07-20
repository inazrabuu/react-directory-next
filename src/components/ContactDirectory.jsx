'use client'

import { useMemo, useCallback, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import { useContactStore } from '../store/contactStore'

const ITEM_HEIGHT = 60

export default function ContactDirectory({ contacts }) {
  const [search, setSearch] = useState('')

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const filtered = useMemo(() => {
    return contacts.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
  }, [contacts, search])

  const handleSelect = useCallback((contact) => {
    console.log(`Selected: ${contact.name}`)
  }, [])

  const Row = ({ index, style }) => {
    const contact = filtered[index],
          favorites = useContactStore((state) => state.favorites),
          toggleFavorite = useContactStore((state) => state.toggleFavorite),
          isFavorited = favorites.some((c) => c.id === contact.id)

    return (
      <div
        style={style}
        className="flex justify-between items-center border-b px-4 py-2"
      >
        <div
          style={style}
          onClick={() => handleSelect(contact)}
          className="border-b px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <strong>{contact.name}</strong> - {contact.email}
        </div>
        <button
          onClick={() => toggleFavorite(contact)}
          className={`ml-4 text-sm ${
            isFavorited ? 'text-yellow-500' : 'text-gray-400'            
          }`}
        >
          *
        </button>
      </div>
    )
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Directory (App Router)</h1>
      <input 
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 border mb-4"
      />
      <List
        height={500}
        itemCount={filtered.length}
        itemSize={ITEM_HEIGHT}
        width="100%"
      >
        {Row}
      </List>
    </main>
  )
}