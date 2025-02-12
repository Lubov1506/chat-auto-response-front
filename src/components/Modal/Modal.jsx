import { useEffect } from "react";
import s from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, title = "Default modal", onClose }) => {
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div className={s.wrapper} onClick={handleBackDropClick}>
      <div className={s.content}>
        <h1>{title}</h1>

        <button className={s.closeBtn} onClick={onClose}>
          <IoClose className={s.close_icon} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
