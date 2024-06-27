import { createContext, useEffect, useState } from "react";
import { AppContextType } from "../types/AppContextType";
import { Data } from "../types/DataType";

export const AppContext = createContext<AppContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const WEBSITE_URL = window.location.href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [data, setData] = useState<Data | undefined>();

  const getData = async () => {
    fetch('https://api.monobank.ua/bank/jar/4SF3SCEV1t84mjZzEGtRMogxzhLZA4zS')
      .then(res => {
      return res.json()
      })
    .then(json => setData(json))
  }

  useEffect(() => {
    getData()
  }, []);

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
    } finally {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
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
    writeClipboardText,
    setIsModalOpen,
    isCopied,
    data
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
