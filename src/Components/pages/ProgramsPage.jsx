import React from "react";
import ProgramsSection from "@/components/ProgramsSection";
import ScheduleFeesSection from "@/components/ScheduleFeesSection";

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <ProgramsSection />
      <ScheduleFeesSection />
    </div>
  );
}