"use client";
import React, { createContext, useContext, ReactNode } from "react";

const LocaleContext = createContext<string | undefined>(undefined);

export const LocaleProvider = ({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
