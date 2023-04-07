import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // Countries

  await prisma.lang.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.activityToUser.deleteMany();
  await prisma.label.deleteMany();
  await prisma.value.deleteMany();
  await prisma.question.deleteMany();
  await prisma.testResult.deleteMany();

  const langIT = await prisma.lang.create({
    data: {
      lang: "it-IT",
      lang_short: "it",
    },
  });

  const langEN = await prisma.lang.create({
    data: {
      lang: "en-GB",
      lang_short: "en",
    },
  });

  // questions
  const question1 = await prisma.question.create({
    data: {
      id_question: 1,
      langId: langIT.id,
      type: "steps",
      title: "Quanto spesso mangi carne, pesce e altri derivati animali?",
      description: "(manzo, maiale, pollo, pesce, uova, latticini)",
      tooltip: null,
      category: "Food",
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Mai",
      maxLabel: "Molto Spesso",
      labels: {
        create: [
          {
            langId: langIT.id,
            gt: 0,
            title: "Mai",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 2,
            title: "Raramente",
            description:
              "(sono vegetariano - non mangio carne ma mangio uova e latticini)",
          },
          {
            langId: langIT.id,
            gt: 25,
            title: "Ogni Tanto",
            description:
              "(adoro le verdure ma occasionalmente mangio carne, pesce e derivati animali)",
          },
          {
            langId: langIT.id,
            gt: 50,
            title: "Spesso",
            description:
              "(carne, pesce e verdure sono bilanciate nella mia dieta - consumo carne e/o pesce poche volte a settimana, uova e latticini quotidianamente)",
          },
          {
            langId: langIT.id,
            gt: 75,
            title: "Molto spesso",
            description: "(mangio carne tutti i giorni)",
          },
        ],
      },
      note: null,
    },
  });

  const question7 = await prisma.question.create({
    data: {
      id_question: 7,
      langId: langIT.id,
      type: "number",
      title:
        "Quanto del cibo che mangi è fresco, non confezionato o coltivato localmente?",
      description: "(meno di 320 chilometri di distanza)",
      tooltip: null,
      category: "Food",
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: "%",
      values: {},
      minLabel: "Nessuno",
      maxLabel: "Tutto",
      labels: {},
      note: null,
    },
  });

  const question18 = await prisma.question.create({
    data: {
      id_question: 18,
      langId: langIT.id,
      type: "answers",
      category: "Abitazione",
      title: "Quale tipo di abitazione è piu simile a casa tua?",
      description: null,
      tooltip: null,
      minValue: 20,
      maxValue: 140,
      defaultValue: 100,
      um: null,
      values: {
        create: [
          {
            langId: langIT.id,
            title: "Casa unifamiliare, senza acqua corrente",
            value: 20,
          },
          {
            langId: langIT.id,
            title: "Casa unifamiliare, con acqua corrente",
            value: 125,
          },
          {
            langId: langIT.id,
            title: "Casa popolare",
            value: 85,
          },
          {
            langId: langIT.id,
            title:
              "Casa a schiera o palazzina plurifamiliare (2-4 unità abitative)",
            value: 100,
          },
          {
            langId: langIT.id,
            title: "Condominio",
            value: 140,
          },
        ],
      },
      minLabel: null,
      maxLabel: null,
      labels: {},
      note: null,
    },
  });

  const question20 = await prisma.question.create({
    data: {
      id_question: 20,
      langId: langIT.id,
      type: "answers",
      category: "Abitazione",
      title: "Di quale materiale è fatta casa tua?",
      description: null,
      tooltip: null,
      minValue: 20,
      maxValue: 120,
      defaultValue: 100,
      um: null,
      values: {
        create: [
          {
            langId: langIT.id,
            title: "Paglia / Bambù",
            value: 20,
          },
          {
            langId: langIT.id,
            title: "Legno",
            value: 100,
          },
          {
            langId: langIT.id,
            title: "Cemento / mattoni",
            value: 90,
          },
          {
            langId: langIT.id,
            title: "Mattoni di terra e paglia",
            value: 91,
          },
          {
            langId: langIT.id,
            title: "Acciaio / altro",
            value: 120,
          },
        ],
      },
      minLabel: null,
      maxLabel: null,
      labels: {},
      note: null,
    },
  });

  const question19 = await prisma.question.create({
    data: {
      id_question: 19,
      langId: langIT.id,
      type: "steps",
      category: "Abitazione",
      title: "Di che dimensioni è la tua casa?",
      description: null,
      tooltip:
        "Case di grandi dimensioni richiedono una maggiore quantità di energia per il riscaldamento, la climatizzazione e l'illuminazione. Se però gli spazi sono condivisi da più persone, si guadagna una maggiore efficienza energetica. Per esempio, due persone che condividono la stessa casa possono dimezzare la loro Impronta Ecologica individuale condividendo la quantità di energia per il riscaldamento e l'illuminazione che altrimenti sarebbe utilizzata da una singola persona.",
      minValue: 50,
      maxValue: 15000,
      defaultValue: 900,
      um: "sq ft",
      values: {},
      minLabel: "Molto piccola",
      maxLabel: "Molto grande",
      labels: {
        create: [
          {
            langId: langIT.id,
            gt: 50,
            title: "Molto piccola",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 150,
            title: "Piccola",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 500,
            title: "Nella media",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 1500,
            title: "Grande",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 5000,
            title: "Molto grande",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const question22 = await prisma.question.create({
    data: {
      id_question: 22,
      langId: langIT.id,
      type: "number",
      category: "Abitazione",
      title: "Quante persone vivono nella tua casa?",
      description: null,
      tooltip: null,
      minValue: 1,
      maxValue: 10,
      defaultValue: 2,
      um: null,
      values: {},
      minLabel: "Solo io",
      maxLabel: "10+",
      labels: {},
      note: null,
    },
  });

  const question23 = await prisma.question.create({
    data: {
      id_question: 23,
      langId: langIT.id,
      type: "toggle",
      category: "Abitazione",
      title: "Hai energia elettrica in casa?",
      description: null,
      tooltip: null,
      minValue: 10,
      maxValue: 100,
      defaultValue: 10,
      um: null,
      values: {},
      minLabel: "No",
      maxLabel: "Si",
      labels: {},
      note: "just toggle between 10=false and 100=true",
    },
  });

  const question24 = await prisma.question.create({
    data: {
      id_question: 24,
      langId: langIT.id,
      type: "steps",
      category: "Abitazione",
      title: "Quanto è efficiente il consumo di energia elettrica in casa tua?",
      description: null,
      tooltip:
        "Quanto spesso utilizzi il riscaldamento o l'aria condizionata? Usi elettrodomestici e lampadine ad alta efficienza energetica? Se abiti in una casa ad alta efficienza energetica progettata per il riscaldamento ed il condizionamento passivi o se abiti in una zona dal clima mite in cui riscaldamento e climatizzazione non sono necessari, regola la tua risposta verso 'molto efficiente'",
      minValue: 10,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Per niente",
      maxLabel: "Molto",
      labels: {
        create: [
          {
            langId: langIT.id,
            gt: 10,
            title: "Molto inefficiente",
            description:
              "(scarsa coibentazione, solo poche lampade a LED, sistemi di riscaldamento / climatizzazione usati spesso)",
          },
          {
            langId: langIT.id,
            gt: 11,
            title: "Inferiore alla media",
            description: "(lampade poco efficienti, elettrodomestici standard)",
          },
          {
            langId: langIT.id,
            gt: 20,
            title: "Nella media",
            description:
              "(elettrodomestici e riscaldamento / climatizzazione moderni)",
          },
          {
            langId: langIT.id,
            gt: 30,
            title: "Sopra la media",
            description:
              "(ottima coibentazione, lampade e elettrodomestici altamente efficienti, uso consapevole dell'energia)",
          },
          {
            langId: langIT.id,
            gt: 60,
            title: "Design incentrato sull'efficienza",
            description:
              "(riscaldamento / climatizzazione passivi, controllo avanzato della temperatura e ventilazione, basso consumo di elettricità)",
          },
        ],
      },
    },
  });

  const question21 = await prisma.question.create({
    data: {
      id_question: 21,
      langId: langIT.id,
      type: "number",
      category: "Abitazione",
      title:
        "In che percentuale l'energia elettrica della tua casa deriva da fonti rinnovabili",
      description: "(direttamente o tramite acquisto di energia 'verde')",
      tooltip:
        "In base ad un recente studio della BP (2017 Statistical Review of World Energy), circa il 9.5% dell'energia consumata a livello globale nel 2016 è stata prodotta a partire da fonti rinnovabili ed idroelettrico ed il 4.5% da nucleare.",
      minValue: 0,
      maxValue: 100,
      defaultValue: 12,
      um: "%",
      values: {},
      minLabel: "Bassa",
      maxLabel: "Alta",
      labels: {},
      note: null,
    },
  });

  const question10 = await prisma.question.create({
    data: {
      id_question: 10,
      langId: langIT.id,
      type: "steps",
      category: "Abitazione",
      title: "Quanti rifiuti produci rispetto ai tuoi vicini?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Molti meno",
      maxLabel: "Molti di più",
      labels: {
        create: [
          {
            langId: langIT.id,
            gt: 0,
            title: "Molti meno",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 2,
            title: "Di meno",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 25,
            title: "La stessa quantità",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 50,
            title: "Di più",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 75,
            title: "Molti di più",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const question25 = await prisma.question.create({
    data: {
      id_question: 25,
      langId: langIT.id,
      type: "number",
      category: "Trasporti",
      title: "Quanti chilometri percorri ogni settimana in macchina o in moto?",
      description: "(sia come guidatore che come passeggero)",
      tooltip:
        "Se cammini o vai in bicicletta, scegli zero. Spostarsi a piedi o in bicicletta riduce la tua Impronta e contribuisce al tuo benessere.",
      minValue: 0,
      maxValue: 500,
      defaultValue: 133,
      um: "miglia",
      values: {},
      minLabel: "Zero",
      maxLabel: "Molti",
      labels: {},
      note: "Macchina",
    },
  });

  const question26 = await prisma.question.create({
    data: {
      id_question: 26,
      langId: langIT.id,
      type: "number",
      category: "Trasporti",
      title: "Quanti chilometri percorri ogni settimana in macchina o in moto?",
      description: "(sia come guidatore che come passeggero)",
      tooltip:
        "Se cammini o vai in bicicletta, scegli zero. Spostarsi a piedi o in bicicletta riduce la tua Impronta e contribuisce al tuo benessere.",
      minValue: 0,
      maxValue: 500,
      defaultValue: 3,
      um: "miglia",
      values: {},
      minLabel: "Zero",
      maxLabel: "Molti",
      labels: {},
      note: "Moto",
    },
  });

  const question27 = await prisma.question.create({
    data: {
      id_question: 27,
      langId: langIT.id,
      type: "steps",
      category: "Trasporti",
      title:
        "Qual è il consumo medio di carburante dei veicoli che usi più spesso?",
      description: null,
      tooltip:
        "A seconda della fonte energetica utilizzata per produrre energia elettrica (% rinnovabile rispetto alla % non rinnovabile), il consumo equivalente di un veicolo elettrico può variare da 2 a 6 litri per 100 km percorsi.",
      minValue: 10,
      maxValue: 150,
      defaultValue: 21,
      um: "miglia/gallone",
      values: {},
      minLabel: "Inefficiente",
      maxLabel: "Efficiente o elettrica",
      labels: {},
      note: "Macchina",
    },
  });

  const question28 = await prisma.question.create({
    data: {
      id_question: 28,
      langId: langIT.id,
      type: "steps",
      category: "Trasporti",
      title:
        "Qual è il consumo medio di carburante dei veicoli che usi più spesso?",
      description: null,
      tooltip:
        "A seconda della fonte energetica utilizzata per produrre energia elettrica (% rinnovabile rispetto alla % non rinnovabile), il consumo equivalente di un veicolo elettrico può variare da 2 a 6 litri per 100 km percorsi.",
      minValue: 25,
      maxValue: 150,
      defaultValue: 6,
      um: "miglia/gallone",
      values: {},
      minLabel: "Inefficiente",
      maxLabel: "Efficiente o elettrica",
      labels: {},
      note: "Moto",
    },
  });

  const question29 = await prisma.question.create({
    data: {
      id_question: 29,
      langId: langIT.id,
      type: "steps",
      category: "Trasporti",
      title: "Quando viaggi in auto, quante volte viaggi con qualcun altro?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 100,
      defaultValue: 34,
      um: "%",
      values: {},
      minLabel: "Mai",
      maxLabel: "Sempre",
      labels: {
        create: [
          {
            langId: langIT.id,
            gt: 0,
            title: "Mai",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 20,
            title: "Raramente",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 40,
            title: "Ogni tanto",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 60,
            title: "Spesso",
            description: null,
          },
          {
            langId: langIT.id,
            gt: 80,
            title: "Sempre",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const question30 = await prisma.question.create({
    data: {
      id_question: 30,
      langId: langIT.id,
      type: "number",
      category: "Trasporti",
      title: "Quanti chilometri percorri ogni settimana con i mezzi pubblici?",
      description: "(autobus, treno, etc.)",
      tooltip: null,
      minValue: 0,
      maxValue: 500,
      defaultValue: 45,
      um: "miglia",
      values: {},
      minLabel: "Non molti",
      maxLabel: "Molti",
      labels: {},
      note: null,
    },
  });

  const question33 = await prisma.question.create({
    data: {
      id_question: 33,
      langId: langIT.id,
      type: "number",
      category: "Trasporti",
      title: "Quante ore viaggi in aereo ogni anno?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 200,
      defaultValue: 60,
      um: "ore",
      values: {},
      minLabel: "Mai",
      maxLabel: "Sempre",
      labels: {},
      note: null,
    },
  });

  /*

  QUESTIONS IN ENGLISH

  */
  // questions
  const questionEN1 = await prisma.question.create({
    data: {
      id_question: 1,
      langId: langEN.id,
      type: "steps",
      title: "How often do you eat animal-based products?",
      description: "(beef, pork, chicken, fish, eggs, dairy products)",
      tooltip: null,
      category: "Food",
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Never",
      maxLabel: "Very Often",
      labels: {
        create: [
          {
            langId: langEN.id,
            gt: 0,
            title: "Never",
            description: "(vegan)",
          },
          {
            langId: langEN.id,
            gt: 2,
            title: "Infrequently",
            description: "(vegetarian - eggs/dairy, no meat)",
          },
          {
            langId: langEN.id,
            gt: 25,
            title: "Occasionally",
            description: "(really like veggies - occasional meat, eggs/dairy)",
          },
          {
            langId: langEN.id,
            gt: 50,
            title: "Often",
            description:
              "(balanced meat/veggies - meat a few times a week, eggs/dairy almost daily)",
          },
          {
            langId: langEN.id,
            gt: 75,
            title: "Very Often",
            description: "(meat daily)",
          },
        ],
      },
      note: null,
    },
  });

  const questionEN7 = await prisma.question.create({
    data: {
      id_question: 7,
      langId: langEN.id,
      type: "number",
      title:
        "How much of the food that you eat is unprocessed, unpackaged or locally grown?",
      description: "(less than 320 kilometers/200 miles away)",
      tooltip: null,
      category: "Food",
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: "%",
      values: {},
      minLabel: "None",
      maxLabel: "All",
      labels: {},
      note: null,
    },
  });

  const questionEN18 = await prisma.question.create({
    data: {
      id_question: 18,
      langId: langEN.id,
      type: "answers",
      category: "Housing",
      title: "Which housing type best describes your home?",
      description: null,
      tooltip: null,
      minValue: 20,
      maxValue: 140,
      defaultValue: 100,
      um: null,
      values: {
        create: [
          {
            langId: langEN.id,
            title: "Freestanding, no running water",
            value: 20,
          },
          {
            langId: langEN.id,
            title: "Freestanding, running water",
            value: 125,
          },
          {
            langId: langEN.id,
            title: "Multi-storey apartment",
            value: 85,
          },
          {
            langId: langEN.id,
            title: "Duplex, row house or building with 2-4 housing units",
            value: 100,
          },
          {
            langId: langEN.id,
            title: "Luxury condominium",
            value: 140,
          },
        ],
      },
      minLabel: null,
      maxLabel: null,
      labels: {},
      note: null,
    },
  });

  const questionEN20 = await prisma.question.create({
    data: {
      id_question: 20,
      langId: langEN.id,
      type: "answers",
      category: "Housing",
      title: "What material is your house constructed with?",
      description: null,
      tooltip: null,
      minValue: 20,
      maxValue: 120,
      defaultValue: 100,
      um: null,
      values: {
        create: [
          {
            langId: langEN.id,
            title: "Straw / bamboo",
            value: 20,
          },
          {
            langId: langEN.id,
            title: "Wood",
            value: 100,
          },
          {
            langId: langEN.id,
            title: "Brick / concrete",
            value: 90,
          },
          {
            langId: langEN.id,
            title: "Adobe",
            value: 91,
          },
          {
            langId: langEN.id,
            title: "Steel / other",
            value: 120,
          },
        ],
      },
      minLabel: null,
      maxLabel: null,
      labels: {},
      note: null,
    },
  });

  const questionEN19 = await prisma.question.create({
    data: {
      id_question: 19,
      langId: langEN.id,
      type: "steps",
      category: "Housing",
      title: "What is the size of your home?",
      description: null,
      tooltip:
        "Larger homes take more energy to heat, cool, and illuminate. However, shared space leads to efficiency gains. For example, two people sharing a house would have less than half the Ecological Footprint of a single person in that space because a proportion of the heating and lighting that would be used by a single person is now shared by two.",
      minValue: 50,
      maxValue: 15000,
      defaultValue: 900,
      um: "sq ft",
      values: {},
      minLabel: "Tiny",
      maxLabel: "Huge",
      labels: {
        create: [
          {
            langId: langEN.id,
            gt: 50,
            title: "Tiny",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 150,
            title: "Small",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 500,
            title: "Medium",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 1500,
            title: "Large",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 5000,
            title: "Huge",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const questionEN22 = await prisma.question.create({
    data: {
      id_question: 22,
      langId: langEN.id,
      type: "number",
      category: "Housing",
      title: "How many people live in your household?",
      description: null,
      tooltip: null,
      minValue: 1,
      maxValue: 10,
      defaultValue: 2,
      um: null,
      values: {},
      minLabel: "Just me",
      maxLabel: "10+",
      labels: {},
      note: null,
    },
  });

  const questionEN23 = await prisma.question.create({
    data: {
      id_question: 23,
      langId: langEN.id,
      type: "toggle",
      category: "Housing",
      title: "Do you have electricity in your home?",
      description: null,
      tooltip: null,
      minValue: 10,
      maxValue: 100,
      defaultValue: 10,
      um: null,
      values: {},
      minLabel: "No",
      maxLabel: "Yes",
      labels: {},
      note: "just toggle between 10=false and 100=true",
    },
  });

  const questionEN24 = await prisma.question.create({
    data: {
      id_question: 24,
      langId: langEN.id,
      type: "steps",
      category: "Housing",
      title: "How energy efficient is your home?",
      description: null,
      tooltip:
        "How often do you run your heater or air conditioner? Do you use energy-efficient appliances and lighting? If you live in an energy-efficient house designed for passive heating and cooling  or live in a mild climate where heating and cooling are unnecessary, adjust your answer towards 'very efficient'.",
      minValue: 10,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Hardly",
      maxLabel: "Very",
      labels: {
        create: [
          {
            langId: langEN.id,
            gt: 10,
            title: "Very inefficient",
            description:
              "(poor insulation, few LED lamps, heating/cooling systems used often)",
          },
          {
            langId: langEN.id,
            gt: 11,
            title: "Below average",
            description: "(inefficient lighting, standard appliances)",
          },
          {
            langId: langEN.id,
            gt: 20,
            title: "Average",
            description: "(modern appliances, climate controls)",
          },
          {
            langId: langEN.id,
            gt: 30,
            title: "Above average",
            description:
              "(well insulated, efficient lighting and appliances, careful use)",
          },
          {
            langId: langEN.id,
            gt: 60,
            title: "Efficiency-centered design",
            description:
              "(passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
          },
        ],
      },
    },
  });

  const questionEN21 = await prisma.question.create({
    data: {
      id_question: 21,
      langId: langEN.id,
      type: "number",
      category: "Housing",
      title:
        "What percentage of your home's electricity comes from renewable sources?",
      description: "(either directly or through purchased green power)",
      tooltip:
        "About 14% of global primary energy consumption came from renewable, hydro, and nuclear in 2016, according to the BP Statistical Review of World Energy (June 2017).",
      minValue: 0,
      maxValue: 100,
      defaultValue: 12,
      um: "%",
      values: {},
      minLabel: "Low",
      maxLabel: "High",
      labels: {},
      note: null,
    },
  });

  const questionEN10 = await prisma.question.create({
    data: {
      id_question: 10,
      langId: langEN.id,
      type: "steps",
      category: "Housing",
      title: "Compared to your neighbors, how much trash do you generate?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 100,
      defaultValue: 30,
      um: null,
      values: {},
      minLabel: "Much less",
      maxLabel: "Much More",
      labels: {
        create: [
          {
            langId: langEN.id,
            gt: 0,
            title: "Much less",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 2,
            title: "Less",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 25,
            title: "Same",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 50,
            title: "More",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 75,
            title: "Much more",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const questionEN25 = await prisma.question.create({
    data: {
      id_question: 25,
      langId: langEN.id,
      type: "number",
      category: "Transportation",
      title: "How far do you travel by car or motorcycle each week?",
      description: "(as a driver or passenger)",
      tooltip:
        "If you only walk or bicycle, choose zero. Both walking and bicycling reduce your Footprint and improve your well-being.",
      minValue: 0,
      maxValue: 500,
      defaultValue: 133,
      um: "miles",
      values: {},
      minLabel: "Zero",
      maxLabel: "Very far",
      labels: {},
      note: "Car",
    },
  });

  const questionEN26 = await prisma.question.create({
    data: {
      id_question: 26,
      langId: langEN.id,
      type: "number",
      category: "Transportation",
      title: "How far do you travel by car or motorcycle each week?",
      description: "(as a driver or passenger)",
      tooltip:
        "If you only walk or bicycle, choose zero. Both walking and bicycling reduce your Footprint and improve your well-being.",
      minValue: 0,
      maxValue: 500,
      defaultValue: 3,
      um: "miles",
      values: {},
      minLabel: "Zero",
      maxLabel: "Very far",
      labels: {},
      note: "Motorcycle",
    },
  });

  const questionEN27 = await prisma.question.create({
    data: {
      id_question: 27,
      langId: langEN.id,
      type: "steps",
      category: "Transportation",
      title:
        "What is the average fuel economy of the vehicles you use most often?",
      description: null,
      tooltip:
        "Depending on the electricity source (% renewable versus % non-renewable), the fuel economy of a typical electric vehicle may range from 2 to 6 litres/100 km or 40 to 150 miles/gallon.",
      minValue: 10,
      maxValue: 150,
      defaultValue: 21,
      um: "miles/gallon",
      values: {},
      minLabel: "Inefficient",
      maxLabel: "Efficient or electric",
      labels: {},
      note: "Car",
    },
  });

  const questionEN28 = await prisma.question.create({
    data: {
      id_question: 28,
      langId: langEN.id,
      type: "steps",
      category: "Transportation",
      title:
        "What is the average fuel economy of the vehicles you use most often?",
      description: null,
      tooltip:
        "Depending on the electricity source (% renewable versus % non-renewable), the fuel economy of a typical electric vehicle may range from 2 to 6 litres/100 km or 40 to 150 miles/gallon.",
      minValue: 25,
      maxValue: 150,
      defaultValue: 6,
      um: "miles/gallon",
      values: {},
      minLabel: "Inefficient",
      maxLabel: "Efficient or electric",
      labels: {},
      note: "Motorcycle",
    },
  });

  const questionEN29 = await prisma.question.create({
    data: {
      id_question: 29,
      langId: langEN.id,
      type: "steps",
      category: "Transportation",
      title: "When you travel by car, how often do you carpool?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 100,
      defaultValue: 34,
      um: "%",
      values: {},
      minLabel: "Never",
      maxLabel: "Always",
      labels: {
        create: [
          {
            langId: langEN.id,
            gt: 0,
            title: "Never",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 20,
            title: "Infrequently",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 40,
            title: "Occasionally",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 60,
            title: "Often",
            description: null,
          },
          {
            langId: langEN.id,
            gt: 80,
            title: "Always",
            description: null,
          },
        ],
      },
      note: null,
    },
  });

  const questionEN30 = await prisma.question.create({
    data: {
      id_question: 30,
      langId: langEN.id,
      type: "number",
      category: "Transportation",
      title: "How far do you travel on public transportation each week?",
      description: "(bus, train, etc.)",
      tooltip: null,
      minValue: 0,
      maxValue: 500,
      defaultValue: 45,
      um: "miles",
      values: {},
      minLabel: "Not far",
      maxLabel: "Very far",
      labels: {},
      note: null,
    },
  });

  const questionEN33 = await prisma.question.create({
    data: {
      id_question: 33,
      langId: langEN.id,
      type: "number",
      category: "Transportation",
      title: "How many hours do you fly each year?",
      description: null,
      tooltip: null,
      minValue: 0,
      maxValue: 200,
      defaultValue: 60,
      um: "hours",
      values: {},
      minLabel: "None",
      maxLabel: "Many",
      labels: {},
      note: null,
    },
  });

  console.log(
    langIT,
    langEN,
    question1,
    question7,
    question18,
    question20,
    question19,
    question22,
    question23,
    question24,
    question21,
    question10,
    question25,
    question26,
    question27,
    question28,
    question29,
    question30,
    question33,
    questionEN1,
    questionEN7,
    questionEN18,
    questionEN20,
    questionEN19,
    questionEN22,
    questionEN23,
    questionEN24,
    questionEN21,
    questionEN10,
    questionEN25,
    questionEN26,
    questionEN27,
    questionEN28,
    questionEN29,
    questionEN30,
    questionEN33
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
