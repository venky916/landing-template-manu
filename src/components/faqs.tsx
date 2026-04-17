"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { UserChatIcon } from "@/illustrations/general";
import { Heading } from "./heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const questions = [
    {
      question: "What is Agenforce AI?",
      answer: "Agenforce AI is a platform for building and managing AI agents.",
    },
    {
      question: "Who is Agenforce AI built for?",
      answer: "Agenforce AI is a platform for building and managing AI agents.",
    },
    {
      question: "How does Agenforce AI work?",
      answer: "Agenforce AI is a platform for building and managing AI agents.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before committing to a plan.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 customer support through chat, email, and comprehensive documentation to help you get the most out of Agenforce AI.",
    },
  ];
  return (
    <div className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container>
        <UserChatIcon />
        <Heading className="mt-10 md:mt-20">Frequently Asked Questions</Heading>
        <div className="flex flex-col gap-2">
          {questions.map((question) => (
            <Question
              key={question.question}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Question = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full overflow-hidden rounded-2xl bg-neutral-100 p-4 md:p-8"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold md:text-2xl">
          {question}
        </h3>
        <div className="relative flex size-6 items-center justify-center rounded-full bg-black">
          <IconMinus
            className={cn(
              "absolute inset-0 size-6 text-white transition-all duration-200",
              open && "scale-0 rotate-90",
            )}
          />
          <IconPlus
            className={cn(
              "absolute inset-0 size-6 scale-0 -rotate-90 text-white transition-all duration-200",
              open && "scale-100 rotate-0",
            )}
          />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <motion.p
              key={String(open)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1,
              }}
              className="mt-4 text-left text-neutral-600"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
