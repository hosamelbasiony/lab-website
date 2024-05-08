import React from "react";
import QuestionsSection from "../components/QuestionsSection";

export default function LandingPage({children}) {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-5">{children}</main>
      <QuestionsSection />
    </>
  );
}
