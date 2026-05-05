"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConsultationData {
  category?: string;
  budget?: string;
}

interface ModalContextType {
  isConsultationModalOpen: boolean;
  consultationData?: ConsultationData;
  openConsultationModal: (data?: ConsultationData) => void;
  closeConsultationModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationData, setConsultationData] = useState<ConsultationData | undefined>();

  const openConsultationModal = (data?: ConsultationData) => {
    if (data) setConsultationData(data);
    setIsConsultationModalOpen(true);
  };
  
  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setTimeout(() => setConsultationData(undefined), 300); // Clear after animation
  };

  return (
    <ModalContext.Provider
      value={{
        isConsultationModalOpen,
        consultationData,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
