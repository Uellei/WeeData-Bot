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

export const FetchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [botName, setBotName] = useState<string>('')
  const [fetchResults, setFetchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setFetchResults([])
      console.log(inputValue, botName)
      const response = await fetch('http://localhost:8000/products/', {
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
  }, [botName])

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