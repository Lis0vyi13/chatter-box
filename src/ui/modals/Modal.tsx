import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import Icon from "../Icon";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: IModal) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-dark bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-2 right-2">
          <Icon className="px-2">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 text-[22px] hover:text-gray-700"
            >
              &times;
            </button>
          </Icon>
        </div>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
