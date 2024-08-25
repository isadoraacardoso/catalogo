"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Search = () => {

  return (
    <div className="flex items-center">
        <Input placeholder="Busque por um acessório..."></Input>
    
        <Button type="submit">
          <SearchIcon />
        </Button>

    </div>
  )
}

export default Search