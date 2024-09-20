"use client"

import { Button } from "@/components/ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href={`/itens?name=${option.title}`}>
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
    </SheetContent>
  )
}

export default SidebarSheet