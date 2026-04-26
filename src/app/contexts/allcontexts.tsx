"use client";

import { createContext, useContext, useState } from "react";
type Context = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalContext = createContext<Context | null>(null);

export function AllContexts({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useAllContexts = () => {
  let context = useContext(ModalContext);
  if (!context) {
    throw new Error("Context not found");
  }
  return context;
};
