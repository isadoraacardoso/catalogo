import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="LN Acessórios" src="/image.png" height={100} width={130} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
        </Sheet>

      </CardContent>
    </Card>
  )
}

export default Header