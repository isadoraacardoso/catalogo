
import Header from "@/app/_components/header"
import Search from "@/app/_components/search"
import { db } from "@/lib/prisma";
import Accessories from "@/app/_components/itens";

interface ItensDetailsPageProps{
    searchParams: {
        id?: string;
        name?: string;
    };
}

const ItensDetailsPage = async ({ searchParams }: ItensDetailsPageProps) => {
    const accessories = await db.accessories.findMany({
      where: {
        OR: [
          searchParams?.name
            ? {
                name: {
                  contains: searchParams?.name,
                  mode: "insensitive",
                },
              }
            : {},
        ],
      },
    })
  
    return (
      <div>
        <Header />
        <div className="my-6 px-5">
          <Search />
        </div>
        <div className="px-5">
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Resultados para &quot;{searchParams?.name}
            &quot;
          </h2>
          <div className="grid grid-cols-2 gap-4">
          {accessories.map((accessories)=>(
            <Accessories key={accessories.id} accessories={accessories}/>
          ))}
          </div>
        </div>
      </div>
    )
  }

export default ItensDetailsPage;