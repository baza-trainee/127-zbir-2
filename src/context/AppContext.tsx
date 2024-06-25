import { createContext, useState } from "react";
import { AppContextType } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const WEBSITE_URL = 'https://testing-1ceda.web.app/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(WEBSITE_URL);
    } catch (error) {
      console.error(error);
    }
  }

  const button = document.getElementById("button");

  if (button) {
    button.addEventListener("click", () => writeClipboardText());
  }

  const contextValue = {
    isMenuOpen,
    toggleMenu,
    isModalOpen,
    handleModal,
    setIsMenuOpen,
    WEBSITE_URL,
    writeClipboardText
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
