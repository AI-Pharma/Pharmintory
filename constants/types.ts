import React from "react";

export interface SheetProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export interface SheetContentProps {
  children: React.ReactNode;
  close: () => void;
  side: "top" | "right" | "bottom" | "left";
}
