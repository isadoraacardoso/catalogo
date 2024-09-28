import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { db } from "@/lib/prisma"
import { ChevronLeftIcon, MenuIcon, } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import AccessoryButton from "@/app/_components/accessoryButton"; 

interface ItensDetailsPageProps {
  params: {
    id: string
  }
}

const ItensDetailsPage = async ({ params }: ItensDetailsPageProps) => {
  try{
  // chamar o meu banco de dados
  const itens = await db.accessories.findUnique({
    where: {
      id: params.id,
    }
  })

  if (!itens) {
    return notFound()
  }



  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[500px] w-full">
        <Image
          alt={itens.name}
          src={itens?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      {/* TÍTULO */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{itens.name}</h1>
      </div>

      {/* DESCRIÇÃO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Descrição</h2>
        <p className="text-justify text-sm">{itens?.description}</p>
      </div>

      {/* PREÇO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Valor</h2>
        <p className="text-sm font-bold text-primary">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(itens.price))}
              </p>
      </div>

      <div className="space-y-2 border-b border-solid p-5">
      <AccessoryButton />
      </div>
    </div>
  ) } catch (error) {
    // Se um erro ocorrer, ele será capturado aqui
    console.error("Erro ao buscar os dados:", error);
    return notFound();
    }
}

export default ItensDetailsPage