import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold">LN Acessórios</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer