"use client"

import { Input } from "@/components/ui/input"

interface SearchInputProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchInput({ onSearch, placeholder = "Search projects..." }: SearchInputProps) {
  return (
    <Input
      type="search"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      className="max-w-sm mx-auto"
    />
  )
}

