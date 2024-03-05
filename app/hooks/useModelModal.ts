import { create } from "zustand";

interface ModalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModelModal = create<ModalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModelModal;
