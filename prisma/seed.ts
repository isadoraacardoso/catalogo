const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    

    const accessories = [
      {
        name: "Colar Duplo (CT)",
        description: "Colar duplo prateado.",
        price: "0.00",
        imageUrl: "/colarduplo.jpg",
      },
      {
        name: "Colar Borboleta Vazada",
        description: "Colar borboleta vazada prateado.",
        price: "0.00",
        imageUrl:
          "/colarborboleta.jpg",
      },
      {
        name: "Colar Ponto de Luz",
        description: "Colar Ponto de Luz prateado.",
        price: "0.00",
        imageUrl:
          "/colarpontodeluz.jpg",
      },
      {
        name: "Colar Choker Riviera",
        description: "Colar Choker Riviera prateado.",
        price: "0.00",
        imageUrl:
          "/colarriviera.jpg",
      },
      {
        name: "Colar Infinito",
        description: "Colar com o símbolo do Infinito prateado.",
        price: "0.00",
        imageUrl:
          "/colarinfinito.jpg",
      },
      {
        name: "Tornozeleira Bolinhas",
        description: "Tornozeleira de Bolinhas prateado.",
        price: "0.00",
        imageUrl:
          "/tornozeleirabolinhas.jpg",
      },
      {
        name: "Tornozeleira Torcidinha",
        description: "Tornozeleira Torcidinha prateada.",
        price: "0.00",
        imageUrl:
          "/tornozeleiratorcidinha.jpg",
      },
      {
        name: "Relógio Vintage",
        description: "Relógio de pulso vintage prateado.",
        price: "0.00",
        imageUrl:
          "/relogio.jpg",
      },
      {
        name: "Brinco Earcuff Color",
        description: "Par de Brincos Earcuff Color prateado com detalhes em rosa, azul e verde.",
        price: "0.00",
        imageUrl:
          "/brincocores.jpg",
      },
      {
        name: "Brinco Argola",
        description: "Brinco modelo Argola em formato de mola prateado.",
        price: "0.00",
        imageUrl:
          "/brincoargola.jpg",
      },
      {
        name: "Colar Coração Cravejado (Rubi)",
        description: "Colar Coração Cravejado em Rubi.",
        price: "0.00",
        imageUrl:
          "/colarcoracaorubi.jpg",
      },
      {
        name: "Pulseira 3 Corações (Azul)",
        description: "Pulseira 3 Corações prateada com detalhes em azul.",
        price: "0.00",
        imageUrl:
          "/pulseiracoracoesazul.jpg",
      },
      {
        name: "Pulseira Grumet",
        description: "Pulseira no estilo Grumet prateada.",
        price: "0.00",
        imageUrl:
          "/pulseiragrumet.jpg",
      },      
      {
        name: "Pulseira Pipoca",
        description: "Pulseira no estilo pipoca prateada.",
        price: "0.00",
        imageUrl:
          "/pulseirapipoca.jpg",
      },
      {
        name: "Pulseira Para Berloques",
        description: "Pulseira Para Berloques prateada.",
        price: "0.00",
        imageUrl:
          "/pulseiraberloques.jpg",
      },
      {
        name: "Pulseira 10 Mandamentos",
        description: "Pulseira com os 10 Mandamentos dourada.",
        price: "0.00",
        imageUrl:
          "/pulseiramandamentos.jpg",
      },
      {
        name: "Conjunto Pulseira e Brinco Trevo",
        description: "Conjunto contendo uma Pulseira e um par de Brincos dourados, no formato de trevo.",
        price: "0.00",
        imageUrl:
          "/conjuntotrevo.jpg",
      },
      {
        name: "Brinco Trevo",
        description: "Par de Brincos Trevo nas cores preto e dourado.",
        price: "0.00",
        imageUrl:
          "/brincotrevo.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Conjunto de três brincos, sendo dois no formato Ponto de Luz e um no formato de coração, com tamanhos diferentes, na cor dourada.",
        price: "0.00",
        imageUrl:
          "/triobrincos.jpg",
      },
      {
        name: "Mini Argola",
        description: "Um par de brincos no formato de mini argola trançada, na cor dourada.",
        price: "0.00",
        imageUrl:
          "/miniargola.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Conjunto de três brincos de pérolas prateadas.",
        price: "0.00",
        imageUrl:
          "/trioperolas.jpg",
      },
      {
        name: "Trio de Brincos Ponto de Luz",
        description: "Conjunto de três brincos Ponto de Luz, com três tamanhos diferentes, strass prateado.",
        price: "0.00",
        imageUrl:
          "/triopontodeluz.jpg",
      },
      {
        name: "Bracelete Superior",
        description: "Bracelete Superior prateado.",
        price: "0.00",
        imageUrl:
          "/bracelete.jpg",
      },
      {
        name: "Colar Choker (Folheado)",
        description: "Colar Choker em corrente folheado.",
        price: "0.00",
        imageUrl:
          "/choker.jpg",
      },
      {
        name: "Colar Boia",
        description: "Colar fecho boia prateado.",
        price: "0.00",
        imageUrl:
          "/colarboia.jpg",
      },
      {
        name: "Colar",
        description: "Colar com detalhes em flor prateado.",
        price: "0.00",
        imageUrl:
          "/colar.jpg",
      },
      {
        name: "Colar Choker",
        description: "Colar Choker com bolinhas prateado.",
        price: "0.00",
        imageUrl:
          "/choker2.jpg",
      },
      {
        name: "Colar Choker Fita",
        description: "Colar Choker Fita dourado.",
        price: "0.00",
        imageUrl:
          "/chokerfita.jpg",
      },
      {
        name: "Colar",
        description: "Colar com pingente em círculo prateado.",
        price: "0.00",
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