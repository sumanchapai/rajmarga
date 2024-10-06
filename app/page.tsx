'use client'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2 md:px-4">
      <h1 className="text-4xl text-blue-700">
        Road Status | <span className="font-medium text-red-700"> Nepal </span>
      </h1>
      <Query />
      <Status />
    </div>
  )
}

// TODO:
function Query() {
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

function Status() {
  return (
    <div className="mt-4">
      <p className="font-bold">Status </p>
    </div>
  )
}
