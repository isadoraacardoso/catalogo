import Header from "./_components/header"
import Accessories from "./_components/itens"
import Search from "./_components/search"
import { db } from "../lib/prisma"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { quickSearchOptions } from "./_constants/search"
import ItensDetailsPage from "./itens/[id]/page"
import Link from "next/link"

const Home = async () => {
  const accessories = await db.accessories.findMany({})
  
  return (
    <div >
      <div>
      {/* header */}
      <Header />
      </div>

      {/* BUSCA */}
      <div className="mt-6 ml-2 mr-2">
          <Search />
        </div>

       {/* BUSCA RÁPIDA */}
       <div className="mt-6 ml-2 mr-2 flex gap-3 justify-center overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
             <Link href={`/itens?name=${option.title}`}>
                {option.title}
              </Link>
            </Button>
           
          ))}
        </div>

      <div className="mt-6 mb-[4.5rem] ml-2 mr-2">
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400"></h2>
        <div className="flex flex-wrap justify-center gap-8">
          {accessories.map((accessories)=>(
            <Accessories key={accessories.id} accessories={accessories}/>
          ))}
        </div>

        </div>
    </div>
  )
}

export default Home