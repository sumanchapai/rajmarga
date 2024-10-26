'use client'
import { useState, useRef, useEffect } from 'react'

export function QueryBox() {
  const [query, setQuery] = useState<string>('')
  const [showAutoSuggestions, setShowAutoSuggestions] = useState<boolean>(false)
  const inputRef = useRef<null | HTMLInputElement>(null)
  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }
  // Hide autosuggetsion when the query input isn't focused
  function handleOnBlur() {
    setShowAutoSuggestions(false)
  }
  // Show autosuggetions if there's any text in the input query
  useEffect(() => {
    if (query.trim().length > 0) setShowAutoSuggestions(true)
  }, [query])
  // Focus the input text on page load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])
  return (
    <div className="mt-4 relative">
      <input
        ref={inputRef}
        placeholder="search by highway, or location"
        className="w-3/4 lg:w-1/2 border rounded px-4 py-2"
        value={query}
        onChange={handleQueryChange}
        onBlur={handleOnBlur}
      />
      {showAutoSuggestions && (
        <div className="border w-3/4 lg:w-1/2 px-4 py-2 absolute bg-gray-200">TODO: Autocomplete</div>
      )}
    </div>
  )
}
