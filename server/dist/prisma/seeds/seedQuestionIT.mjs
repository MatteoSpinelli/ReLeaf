var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function seedQuestionIT({ langIT }, log = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const question1 = yield prisma.question.create({
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
                            description: "(sono vegetariano - non mangio carne ma mangio uova e latticini)",
                        },
                        {
                            langId: langIT.id,
                            gt: 25,
                            title: "Ogni Tanto",
                            description: "(adoro le verdure ma occasionalmente mangio carne, pesce e derivati animali)",
                        },
                        {
                            langId: langIT.id,
                            gt: 50,
                            title: "Spesso",
                            description: "(carne, pesce e verdure sono bilanciate nella mia dieta - consumo carne e/o pesce poche volte a settimana, uova e latticini quotidianamente)",
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
        const question7 = yield prisma.question.create({
            data: {
                id_question: 7,
                langId: langIT.id,
                type: "number",
                title: "Quanto del cibo che mangi è fresco, non confezionato o coltivato localmente?",
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
        const question18 = yield prisma.question.create({
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
                            title: "Casa a schiera o palazzina plurifamiliare (2-4 unità abitative)",
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
        const question20 = yield prisma.question.create({
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
        const question19 = yield prisma.question.create({
            data: {
                id_question: 19,
                langId: langIT.id,
                type: "steps",
                category: "Abitazione",
                title: "Di che dimensioni è la tua casa?",
                description: null,
                tooltip: "Case di grandi dimensioni richiedono una maggiore quantità di energia per il riscaldamento, la climatizzazione e l'illuminazione. Se però gli spazi sono condivisi da più persone, si guadagna una maggiore efficienza energetica. Per esempio, due persone che condividono la stessa casa possono dimezzare la loro Impronta Ecologica individuale condividendo la quantità di energia per il riscaldamento e l'illuminazione che altrimenti sarebbe utilizzata da una singola persona.",
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
        const question22 = yield prisma.question.create({
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
        const question23 = yield prisma.question.create({
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
        const question24 = yield prisma.question.create({
            data: {
                id_question: 24,
                langId: langIT.id,
                type: "steps",
                category: "Abitazione",
                title: "Quanto è efficiente il consumo di energia elettrica in casa tua?",
                description: null,
                tooltip: "Quanto spesso utilizzi il riscaldamento o l'aria condizionata? Usi elettrodomestici e lampadine ad alta efficienza energetica? Se abiti in una casa ad alta efficienza energetica progettata per il riscaldamento ed il condizionamento passivi o se abiti in una zona dal clima mite in cui riscaldamento e climatizzazione non sono necessari, regola la tua risposta verso 'molto efficiente'",
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
                            description: "(scarsa coibentazione, solo poche lampade a LED, sistemi di riscaldamento / climatizzazione usati spesso)",
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
                            description: "(elettrodomestici e riscaldamento / climatizzazione moderni)",
                        },
                        {
                            langId: langIT.id,
                            gt: 30,
                            title: "Sopra la media",
                            description: "(ottima coibentazione, lampade e elettrodomestici altamente efficienti, uso consapevole dell'energia)",
                        },
                        {
                            langId: langIT.id,
                            gt: 60,
                            title: "Design incentrato sull'efficienza",
                            description: "(riscaldamento / climatizzazione passivi, controllo avanzato della temperatura e ventilazione, basso consumo di elettricità)",
                        },
                    ],
                },
            },
        });
        const question21 = yield prisma.question.create({
            data: {
                id_question: 21,
                langId: langIT.id,
                type: "number",
                category: "Abitazione",
                title: "In che percentuale l'energia elettrica della tua casa deriva da fonti rinnovabili",
                description: "(direttamente o tramite acquisto di energia 'verde')",
                tooltip: "In base ad un recente studio della BP (2017 Statistical Review of World Energy), circa il 9.5% dell'energia consumata a livello globale nel 2016 è stata prodotta a partire da fonti rinnovabili ed idroelettrico ed il 4.5% da nucleare.",
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
        const question10 = yield prisma.question.create({
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
        const question25 = yield prisma.question.create({
            data: {
                id_question: 25,
                langId: langIT.id,
                type: "number",
                category: "Trasporti",
                title: "Quanti chilometri percorri ogni settimana in macchina o in moto?",
                description: "(sia come guidatore che come passeggero)",
                tooltip: "Se cammini o vai in bicicletta, scegli zero. Spostarsi a piedi o in bicicletta riduce la tua Impronta e contribuisce al tuo benessere.",
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
        const question26 = yield prisma.question.create({
            data: {
                id_question: 26,
                langId: langIT.id,
                type: "number",
                category: "Trasporti",
                title: "Quanti chilometri percorri ogni settimana in macchina o in moto?",
                description: "(sia come guidatore che come passeggero)",
                tooltip: "Se cammini o vai in bicicletta, scegli zero. Spostarsi a piedi o in bicicletta riduce la tua Impronta e contribuisce al tuo benessere.",
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
        const question27 = yield prisma.question.create({
            data: {
                id_question: 27,
                langId: langIT.id,
                type: "steps",
                category: "Trasporti",
                title: "Qual è il consumo medio di carburante dei veicoli che usi più spesso?",
                description: null,
                tooltip: "A seconda della fonte energetica utilizzata per produrre energia elettrica (% rinnovabile rispetto alla % non rinnovabile), il consumo equivalente di un veicolo elettrico può variare da 2 a 6 litri per 100 km percorsi.",
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
        const question28 = yield prisma.question.create({
            data: {
                id_question: 28,
                langId: langIT.id,
                type: "steps",
                category: "Trasporti",
                title: "Qual è il consumo medio di carburante dei veicoli che usi più spesso?",
                description: null,
                tooltip: "A seconda della fonte energetica utilizzata per produrre energia elettrica (% rinnovabile rispetto alla % non rinnovabile), il consumo equivalente di un veicolo elettrico può variare da 2 a 6 litri per 100 km percorsi.",
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
        const question29 = yield prisma.question.create({
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
        const question30 = yield prisma.question.create({
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
        const question33 = yield prisma.question.create({
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
        if (log) {
            console.log(question1, question7, question18, question20, question19, question22, question23, question24, question21, question10, question25, question26, question27, question28, question29, question30, question33);
        }
        return {
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
        };
    });
}
