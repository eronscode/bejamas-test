import React, { useEffect } from "react";
import {
  
  ModalHeader,
  ScrollOverlay,
  StyledModal,
} from "./styles";
import Portal from "@utils/hocs/Portal";
import { CloseIcon } from "@utils/icons";

const propTypes = {
  //   className: PropTypes.string,
  //   styles: PropTypes.object,
  //   modalContent: PropTypes.string,
  //   isOpen: PropTypes.bool,
  //   toggleModal: PropTypes.func,
  //   ModalTitle: PropTypes.string,
  //   actionButton: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  className: undefined,
  children: undefined,
  isOpen: false,
  toggleModal: () => {},
  ModalTitle: "Modal Title",
};

function Modal({
  className,
  styles,
  children,
  isOpen,
  toggleModal,
  ModalTitle,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal>
          <ScrollOverlay  className={className} onClick={toggleModal}>
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              {...styles}
              className={className}
            >
              <ModalHeader>
                <h3>{ModalTitle}</h3>
                <span onClick={toggleModal}>
                  <CloseIcon />
                </span>
              </ModalHeader>
              <div>{children}</div>
            </StyledModal>
          </ScrollOverlay>
        </Portal>
      )}
    </>
  );
}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
