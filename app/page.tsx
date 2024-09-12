import Header from "./_components/header"
import Accessories from "./_components/itens"
import Search from "./_components/search"
import { db } from "../lib/prisma"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ItensDetailsPage from "./itens/page"

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

      <div className="mt-6 mb-[4.5rem] ml-2 mr-2">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {accessories.map((accessories)=>(
            <Accessories key={accessories.id} accessories={accessories}/>
          ))}
        </div>

      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {accessories.map((accessories)=>(
            <Accessories key={accessories.id} accessories={accessories}/>
          ))}
        </div>

        </div>
    </div>
  )
}

export default Home