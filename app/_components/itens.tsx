"use client"

import { Accessories } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";


interface ItensProps{
    accessories: Accessories
}

const Itens = ({accessories}: ItensProps) => {
    return(
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className=" px-1 ">
               {/* IMAGEM */}
        <div className="relative h-[159px] w-full ">
          <Image
            alt={accessories.name}
            fill
            className="rounded-2xl object-cover"
            src={accessories.imageUrl}
          />
        </div>
          {/* TEXTO */}
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{accessories.name}</h3>
          <p className="truncate text-sm text-gray-400">{accessories.description}</p>
          <p className="text-sm font-bold text-primary flex justify-center pt-2">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(accessories.price))}
              </p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link rel="stylesheet" href={`/itens/${accessories.id}`}>Reservar</Link>
          </Button>
        </div>
            </CardContent>
        </Card>
    );
} 

export default Itens;