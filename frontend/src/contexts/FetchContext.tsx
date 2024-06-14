// src/context/FetchContext.tsx

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react'

interface FetchContextProps {
  inputValue: string
  setInputValue: (value: string) => void
  fetchResults: any[]
  fetchData: () => void
  isLoading: boolean
  setBotName: (value: string) => void
}

const FetchContext = createContext<FetchContextProps | undefined>(undefined)

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [botName, setBotName] = useState<string>('')
  const [fetchResults, setFetchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const API_URL = "http://traseira-rapidoacesso:8000"

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setFetchResults([])
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: inputValue, bot: botName })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFetchResults(data)
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setFetchResults([]);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (botName) {
      fetchData()
    }
  }, [inputValue])

  return (
    <FetchContext.Provider value={{ inputValue, setInputValue, fetchResults, fetchData, isLoading, setBotName }}>
      {children}
    </FetchContext.Provider>
  )
}

export const useFetchContext = () => {
  const context = useContext(FetchContext)
  if (context === undefined) {
    throw new Error('useFetchContext deve ser usado dentro de um FetchProvider')
  }
  return context
}