import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className }) => {
  const dialog = useRef();
  useEffect(() => {
    const madal = dialog.current;
    if (open) {
      madal.showModal();
    }

    return () => madal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${(className = "")}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
