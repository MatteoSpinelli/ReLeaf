import React from "react";
import FaqQuestion from "./FaqQuestion";

export default function Faq() {
  /* TODO:
      1. translate questions 
   */
  const faqs = [
    {
      question: "How can I calculate my carbon footprint?",
      answer:
        "You can use our online calculator to estimate your carbon footprint based on your lifestyle and daily habits. Once you know your carbon footprint, you can take action to reduce it and promote sustainability.",
    },
    {
      question: "What changes can I make to reduce my carbon footprint?",
      answer:
        "You can try using our footprint calculator to measure your impact and get personalized tips such as reducing electricity usage, conserving water, using eco-friendly transportation, and practicing waste reduction.",
    },
    {
      question:
        "How does using renewable energy sources impact my carbon footprint?",
      answer:
        "Incorporating renewable energy sources into your lifestyle, such as solar or wind power, can significantly reduce your carbon footprint by decreasing reliance on fossil fuels and lowering greenhouse gas emissions.",
    },
    {
      question: "How can I encourage my workplace to become more sustainable?",
      answer:
        "You can utilize our website's activities and resources to promote sustainability at your workplace, such as organizing a Green Day event, sharing educational materials, advocating for energy-efficient practices, and utilizing our footprint calculator to track progress and inspire others.",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="font-bold px-5 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl mb-6 text-center md:max-w-xl lg:max-w-5xl">
        Frequently Asked Question
      </h2>
      {faqs.map((faq, index) => (
        <FaqQuestion
          key={`faq${index}`}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
