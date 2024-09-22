const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    

    const accessories = [
      {
        name: "Colar Duplo (CT)",
        description: "Estilo personalizado com as últimas tendências.",
        price: "60.00",
        imageUrl: "/colarduplo.jpg",
      },
      {
        name: "Colar Borboleta Vazada",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: "40.00",
        imageUrl:
          "/colarborboleta.jpg",
      },
      {
        name: "Colar Ponto de Luz",
        description: "Acabamento perfeito para um visual renovado.",
        price: "35.00",
        imageUrl:
          "/colarpontodeluz.jpg",
      },
      {
        name: "Colar Choker Riviera",
        description: "Expressão acentuada com modelagem precisa.",
        price: "20.00",
        imageUrl:
          "/colarriviera.jpg",
      },
      {
        name: "Colar Infinito",
        description: "Relaxe com uma massagem revigorante.",
        price: "50.00",
        imageUrl:
          "/colarinfinito.jpg",
      },
      {
        name: "Tornozeleira Bolinhas",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/tornozeleirabolinhas.jpg",
      },
      {
        name: "Tornozeleira Torcidinha",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/tornozeleiratorcidinha.jpg",
      },
      {
        name: "Relógio Vintage",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/relogio.jpg",
      },
      {
        name: "Brinco Earcuff Color",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/brincocores.jpg",
      },
      {
        name: "Brinco Argola",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/brincoargola.jpg",
      },
      {
        name: "Colar Coração Cravejado (Rubi)",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/colarcoracaorubi.jpg",
      },
      {
        name: "Pulseira 3 Corações (Azul)",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/pulseiracoracoesazul.jpg",
      },
      {
        name: "Pulseira Pipoca",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/pulseirapipoca.jpg",
      },
      {
        name: "Pulseira Para Berloques",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/pulseiraberloques.jpg",
      },
      {
        name: "Pulseira 10 Mandamentos",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/pulseiramandamentos.jpg",
      },
      {
        name: "Conjunto Pulseira e Brinco Trevo",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/conjuntotrevo.jpg",
      },
      {
        name: "Brinco Trevo",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/brincotrevo.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/triobrincos.jpg",
      },
      {
        name: "Mini Argola",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/miniargola.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/trioperolas.jpg",
      },
      {
        name: "Trio de Brincos Ponto de Luz",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/triopontodeluz.jpg",
      },
      {
        name: "Bracelete Superior",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/bracelete.jpg",
      },
      {
        name: "Colar Choker (Folheado)",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/choker.jpg",
      },
      {
        name: "Colar Boia",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/colarboia.jpg",
      },
      {
        name: "Colar",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/colar.jpg",
      },
      {
        name: "Colar Choker",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/choker2.jpg",
      },
      {
        name: "Colar Choker Fita",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/chokerfita.jpg",
      },
      {
        name: "Colar",
        description: "Hidratação profunda para cabelo e barba.",
        price: "25.00",
        imageUrl:
          "/colar2.jpg",
      }
    ];

    // Inserindo os acessórios no banco de dados
    for (const accessory of accessories) {
      await prisma.accessories.create({
        data: accessory,
      });
    }

    console.log("Acessórios inseridos com sucesso!");

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os acessórios:", error);
  }
}

seedDatabase();