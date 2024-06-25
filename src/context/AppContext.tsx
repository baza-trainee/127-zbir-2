import { createContext, useState } from "react";
import { AppContextType } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const contextValue = {
    isMenuOpen,
    toggleMenu,
    isModalOpen,
    handleModal,
    setIsMenuOpen
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
