const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    

    const accessories = [
      {
        name: "Colar Duplo (CT)",
        description: "Colar duplo prata.",
        price: "53.50",
        imageUrl: "/colarduplo.jpg",
      },
      {
        name: "Colar Borboleta Vazada",
        description: "Colar borboleta vazada prata.",
        price: "41.50",
        imageUrl:
          "/colarborboleta.jpg",
      },
      {
        name: "Colar Ponto de Luz",
        description: "Colar Ponto de Luz prata.",
        price: "35.90",
        imageUrl:
          "/colarpontodeluz.jpg",
      },
      {
        name: "Colar Choker Riviera",
        description: "Colar Choker Riviera prata.",
        price: "53.50",
        imageUrl:
          "/colarriviera.jpg",
      },
      {
        name: "Colar Infinito",
        description: "Colar Infinito prata.",
        price: "43.50",
        imageUrl:
          "/colarinfinito.jpg",
      },
      {
        name: "Tornozeleira Bolinhas",
        description: "Tornozeleira de Bolinhas prata.",
        price: "37.50",
        imageUrl:
          "/tornozeleirabolinhas.jpg",
      },
      {
        name: "Tornozeleira Torcidinha",
        description: "Tornozeleira Torcidinha prata.",
        price: "31.50",
        imageUrl:
          "/tornozeleiratorcidinha.jpg",
      },
      {
        name: "Relógio Vintage",
        description: "Relógio de pulso vintage prata.",
        price: "63.90",
        imageUrl:
          "/relogio.jpg",
      },
      {
        name: "Brinco Earcuff Color",
        description: "Par de Brincos Earcuff Color prata com detalhes em rosa, azul e verde.",
        price: "47.90",
        imageUrl:
          "/brincocores.jpg",
      },
      {
        name: "Brinco Argola",
        description: "Brinco modelo Argola em formato de mola prata.",
        price: "53.90",
        imageUrl:
          "/brincoargola.jpg",
      },
      {
        name: "Colar Coração Cravejado (Rubi)",
        description: "Colar Coração Cravejado Rubi.",
        price: "45.90",
        imageUrl:
          "/colarcoracaorubi.jpg",
      },
      {
        name: "Pulseira 3 Corações (Azul)",
        description: "Pulseira 3 Corações azul.",
        price: "37.90",
        imageUrl:
          "/pulseiracoracoesazul.jpg",
      },
      {
        name: "Pulseira Grumet",
        description: "Pulseira no estilo Grumet prata.",
        price: "37.90",
        imageUrl:
          "/pulseiragrumet.jpg",
      },      
      {
        name: "Pulseira Pipoca",
        description: "Pulseira no estilo pipoca prata.",
        price: "37.90",
        imageUrl:
          "/pulseirapipoca.jpg",
      },
      {
        name: "Pulseira Para Berloques",
        description: "Pulseira Para Berloques prata.",
        price: "58.90",
        imageUrl:
          "/pulseiraberloques.jpg",
      },
      {
        name: "Pulseira 10 Mandamentos",
        description: "Pulseira com os 10 Mandamentos folheada.",
        price: "38.00",
        imageUrl:
          "/pulseiramandamentos.jpg",
      },
      {
        name: "Brinco Trevo",
        description: "Par de Brincos Trevo folheado, na cor preta.",
        price: "27.90",
        imageUrl:
          "/brincotrevo.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Trio de brincos, sendo dois no formato Ponto de Luz e um no formato de coração, com tamanhos diferentes, folheado.",
        price: "39.90",
        imageUrl:
          "/triobrincos.jpg",
      },
      {
        name: "Mini Argola",
        description: "Um par de brincos no formato de argola trançada, folheado.",
        price: "16.90",
        imageUrl:
          "/miniargola.jpg",
      },
      {
        name: "Trio de Brincos",
        description: "Trio de brincos de pérolas pratas.",
        price: "34.90",
        imageUrl:
          "/trioperolas.jpg",
      },
      {
        name: "Trio de Brincos Ponto de Luz",
        description: "Trio de brincos Ponto de Luz prata, com três tamanhos diferentes.",
        price: "39.90",
        imageUrl:
          "/triopontodeluz.jpg",
      },
      {
        name: "Bracelete Superior",
        description: "Bracelete Superior prata.",
        price: "51.90",
        imageUrl:
          "/bracelete.jpg",
      },
      {
        name: "Colar Choker (Folheado)",
        description: "Colar Choker em corrente folheado.",
        price: "49.90",
        imageUrl:
          "/choker.jpg",
      },
      {
        name: "Colar Boia",
        description: "Colar fecho boia prata.",
        price: "43.90",
        imageUrl:
          "/colarboia.jpg",
      },
      {
        name: "Colar",
        description: "Colar com detalhes em flor prata.",
        price: "43.90",
        imageUrl:
          "/colar.jpg",
      },
      {
        name: "Colar Choker",
        description: "Colar Choker com bolinhas prata.",
        price: "39.90",
        imageUrl:
          "/choker2.jpg",
      },
      {
        name: "Colar Choker Fita",
        description: "Colar Choker Fita folheado.",
        price: "49.90",
        imageUrl:
          "/chokerfita.jpg",
      },
      {
        name: "Colar",
        description: "Colar com pingente em círculo prata.",
        price: "41.90",
        imageUrl:
          "/colar2.jpg",
      },
      {
        name: "Bracelete Liso",
        description: "Bracelete liso prata.",
        price: "37.95",
        imageUrl:
          "/braceleteliso.jpg",
      },
      {
        name: "Pulseira Entrelaçada",
        description: "Pulseira trançada 4 fios, prata.",
        price: "45.90",
        imageUrl:
          "/pulseiraentrelaçada.jpg",
      },
      {
        name: "Pulseira Fita",
        description: "Pulseira fita laminada.",
        price: "39.90",
        imageUrl:
          "/pulseirafita.jpg",
      },
      {
        name: "Relógio Vintage",
        description: "Relógio de pulso vintage rosê.",
        price: "63.90",
        imageUrl:
          "/relogiofolheado.jpg",
      },
      {
        name: "Colar Gota Cravejada",
        description: "Colar gota cravejada, prata.",
        price: "39.90",
        imageUrl:
          "/colargotacravejada.jpg",
      },
      {
        name: "Brinco Asas",
        description: "Brinco no formato de asas de borboleta, prata.",
        price: "38.90",
        imageUrl:
          "/brincoasas.jpg",
      },
      {
        name: "Colar Cruz Cravejado",
        description: "Colar cruz cravejado, prata.",
        price: "41.90",
        imageUrl:
          "/colarcruzcravejado.jpg",
      },
      {
        name: "Brinco Trevo",
        description: "Brinco trevo folheado.",
        price: "27.90",
        imageUrl:
          "/brincotrevofolheado.jpg",
      },
      {
        name: "Colar Choker Bolinhas",
        description: "Colar choker com bolinhas, prata.",
        price: "41.90",
        imageUrl:
          "/chokerbolinhass.jpg",
      },
      {
        name: "Anel Solitário",
        description: "Anel solitário folheado, regulável.",
        price: "35.90",
        imageUrl:
          "/anelsolitariofolheado.jpg",
      },
      {
        name: "Anel Solitário",
        description: "Anel solitário prata, disponível na numeração 17.",
        price: "39.90",
        imageUrl:
          "/anelsolitarioprata.jpg",
      },
      {
        name: "Anel 2 Fios Cravejado",
        description: "Anel 2 fios cravejado prata, disponível nas numerações 17 e 19.",
        price: "39.90",
        imageUrl:
          "/anel2fios.jpg",
      },
      {
        name: "Anel Solitário",
        description: "Anel solitário prata, disponível nas numerações 18, 19, 21 e 22.",
        price: "39.90",
        imageUrl:
          "/anelsolitario.jpg",
      },
      {
        name: "Anel Solitário",
        description: "Anel solitário prata, disponível nas numerações 19 e 21.",
        price: "47.90",
        imageUrl:
          "/anelsolitario19-21.jpg",
      },
      {
        name: "Anel Entrelaçado",
        description: "Anel entrelaçado prata, regulável.",
        price: "34.90",
        imageUrl:
          "/anelentrelaçado.jpg",
      },
      {
        name: "Anel Prego Cravejado",
        description: "Anel prego cravejado prata, disponível na numeração 13.",
        price: "41.90",
        imageUrl:
          "/anelprego.jpg",
      },
      {
        name: "Anel Bolinhas",
        description: "Anel de bolinhas prata, disponível na numeração 17.",
        price: "34.90",
        imageUrl:
          "/anelbolinhas.jpg",
      },
      {
        name: "Anel Torcido",
        description: "Anel torcido prata, regulável.",
        price: "34.90",
        imageUrl:
          "/aneltorcido.jpg",
      },
      {
        name: "Anel Torcido (Pequeno)",
        description: "Anel torcido prata, disponível na numeração 14.",
        price: "35.90",
        imageUrl:
          "/aneltorcidopequeno.jpg",
      },
      {
        name: "Bracelete Nó",
        description: "Bracelete nó prata, regulável.",
        price: "35.90",
        imageUrl:
          "/braceletenó.jpg",
      },
      {
        name: "Colar Choker Riviera",
        description: "Colar choker riviera folheado.",
        price: "53.50",
        imageUrl:
          "/chokerrivierafolheadostrass.jpg",
      },
      {
        name: "Bracelete Trançado",
        description: "Bracelete trançado folheado.",
        price: "42.90",
        imageUrl:
          "/braceletetrançado.jpg",
      },
      {
        name: "Bracelete Liso",
        description: "Bracelete liso folheado.",
        price: "42.90",
        imageUrl:
          "/braceleteliso.jpg",
      },
      {
        name: "Bracelete Trançado Ponto de Luz",
        description: "Bracelete trançado com ponto de luz folheado.",
        price: "47.90",
        imageUrl:
          "/braceletetrançadopontodeluz.jpg",
      },
      {
        name: "Bracelete Inspiração Cartier",
        description: "Bracelete inspiração cartier folheado.",
        price: "68.90",
        imageUrl:
          "/braceletecartier.jpg",
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