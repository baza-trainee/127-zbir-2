export type AppContextType = {
  isMenuOpen: boolean,
  isModalOpen: boolean,
  toggleMenu: () => void,
  handleModal: () => void,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
};
