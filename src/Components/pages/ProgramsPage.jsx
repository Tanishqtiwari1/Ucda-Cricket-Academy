import React from "react";
import ProgramsSection from "@/Components/ProgramsSection";
import ScheduleFeesSection from "@/Components/ScheduleFeesSection";

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <ProgramsSection />
      <ScheduleFeesSection />
    </div>
  );
}