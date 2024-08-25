import { Card, CardContent } from "@/components/ui/card";
import { Accessories } from "@prisma/client";

interface ItensProps{
    accessories: Accessories;
}

const Itens = ({accessories}: ItensProps) => {
    return(
        <Card>
            <CardContent className="p-8"></CardContent>
            <h1>{accessories.name}</h1>
        </Card>
    );
} 

export default Itens;