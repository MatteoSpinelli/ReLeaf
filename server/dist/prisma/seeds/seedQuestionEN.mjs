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
export default function seedQuestionEN({ langEN }, log = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const questionEN1 = yield prisma.question.create({
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
                            description: "(balanced meat/veggies - meat a few times a week, eggs/dairy almost daily)",
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
        const questionEN7 = yield prisma.question.create({
            data: {
                id_question: 7,
                langId: langEN.id,
                type: "number",
                title: "How much of the food that you eat is unprocessed, unpackaged or locally grown?",
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
        const questionEN18 = yield prisma.question.create({
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
        const questionEN20 = yield prisma.question.create({
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
        const questionEN19 = yield prisma.question.create({
            data: {
                id_question: 19,
                langId: langEN.id,
                type: "steps",
                category: "Housing",
                title: "What is the size of your home?",
                description: null,
                tooltip: "Larger homes take more energy to heat, cool, and illuminate. However, shared space leads to efficiency gains. For example, two people sharing a house would have less than half the Ecological Footprint of a single person in that space because a proportion of the heating and lighting that would be used by a single person is now shared by two.",
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
        const questionEN22 = yield prisma.question.create({
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
        const questionEN23 = yield prisma.question.create({
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
        const questionEN24 = yield prisma.question.create({
            data: {
                id_question: 24,
                langId: langEN.id,
                type: "steps",
                category: "Housing",
                title: "How energy efficient is your home?",
                description: null,
                tooltip: "How often do you run your heater or air conditioner? Do you use energy-efficient appliances and lighting? If you live in an energy-efficient house designed for passive heating and cooling  or live in a mild climate where heating and cooling are unnecessary, adjust your answer towards 'very efficient'.",
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
                            description: "(poor insulation, few LED lamps, heating/cooling systems used often)",
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
                            description: "(well insulated, efficient lighting and appliances, careful use)",
                        },
                        {
                            langId: langEN.id,
                            gt: 60,
                            title: "Efficiency-centered design",
                            description: "(passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
                        },
                    ],
                },
            },
        });
        const questionEN21 = yield prisma.question.create({
            data: {
                id_question: 21,
                langId: langEN.id,
                type: "number",
                category: "Housing",
                title: "What percentage of your home's electricity comes from renewable sources?",
                description: "(either directly or through purchased green power)",
                tooltip: "About 14% of global primary energy consumption came from renewable, hydro, and nuclear in 2016, according to the BP Statistical Review of World Energy (June 2017).",
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
        const questionEN10 = yield prisma.question.create({
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
        const questionEN25 = yield prisma.question.create({
            data: {
                id_question: 25,
                langId: langEN.id,
                type: "number",
                category: "Transportation",
                title: "How far do you travel by car or motorcycle each week?",
                description: "(as a driver or passenger)",
                tooltip: "If you only walk or bicycle, choose zero. Both walking and bicycling reduce your Footprint and improve your well-being.",
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
        const questionEN26 = yield prisma.question.create({
            data: {
                id_question: 26,
                langId: langEN.id,
                type: "number",
                category: "Transportation",
                title: "How far do you travel by car or motorcycle each week?",
                description: "(as a driver or passenger)",
                tooltip: "If you only walk or bicycle, choose zero. Both walking and bicycling reduce your Footprint and improve your well-being.",
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
        const questionEN27 = yield prisma.question.create({
            data: {
                id_question: 27,
                langId: langEN.id,
                type: "steps",
                category: "Transportation",
                title: "What is the average fuel economy of the vehicles you use most often?",
                description: null,
                tooltip: "Depending on the electricity source (% renewable versus % non-renewable), the fuel economy of a typical electric vehicle may range from 2 to 6 litres/100 km or 40 to 150 miles/gallon.",
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
        const questionEN28 = yield prisma.question.create({
            data: {
                id_question: 28,
                langId: langEN.id,
                type: "steps",
                category: "Transportation",
                title: "What is the average fuel economy of the vehicles you use most often?",
                description: null,
                tooltip: "Depending on the electricity source (% renewable versus % non-renewable), the fuel economy of a typical electric vehicle may range from 2 to 6 litres/100 km or 40 to 150 miles/gallon.",
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
        const questionEN29 = yield prisma.question.create({
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
        const questionEN30 = yield prisma.question.create({
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
        const questionEN33 = yield prisma.question.create({
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
        if (log) {
            console.log(questionEN1, questionEN7, questionEN18, questionEN20, questionEN19, questionEN22, questionEN23, questionEN24, questionEN21, questionEN10, questionEN25, questionEN26, questionEN27, questionEN28, questionEN29, questionEN30, questionEN33);
        }
        return {
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
            questionEN33,
        };
    });
}
