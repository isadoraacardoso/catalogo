import Header from "./_components/header"
import Search from "./_components/search"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Home = async () => {
  
  return (
    <div>
      <div>
      {/* header */}
      <Header />
      </div>

      {/* BUSCA */}
      <div className="mt-6">
          <Search />
        </div>


    </div>
  )
}

export default Home