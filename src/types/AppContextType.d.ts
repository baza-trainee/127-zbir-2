import { Data } from "./DataType";

export type AppContextType = {
  isMenuOpen: boolean,
  isModalOpen: boolean,
  toggleMenu: () => void,
  handleModal: () => void,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  WEBSITE_URL: string,
  writeClipboardText: () => void,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isCopied: boolean,
  data: Data | undefined,
};
