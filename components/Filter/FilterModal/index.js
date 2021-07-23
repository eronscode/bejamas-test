import Button from "@components/Button";
import Modal from "@components/Modal";
import { color, mixins } from "@styles/styleUtils";
import styled, { css } from "styled-components";
import FilterSideBar from "../FilterSideBar";

function FilterModal({ isOpen, toggleModal = () => {} }) {
  return (
    <ModalWrapper>
      <Modal className="hidden-lg" isOpen={true}>
        <div>
          <ModalContent>
            <FilterSideBar />
          </ModalContent>
        </div>
        <ModalFooter>
          <div className="item">
            <Button variant="secondary">Clear</Button>
          </div>
          <div className="item">
            <Button>Save</Button>
          </div>
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  height: 100%;
  display: none;
`;
const ModalContent = styled.div`
  margin: 22px;
  overflow: auto;
  overflow-x: hidden;
  resize: none;
  height: 100%;
  max-height: calc(100vh - 38vh);
  p {
    margin: 0;
  }

  ${mixins.customScrollbar(5)}
`;

const ModalFooter = styled.div`
  padding: 22px;
  display: flex;
  position: sticky;
  top: 0;
  background: ${color.secondary.default};
  border: 4px solid ${color.secondary.inc1};
  bottom: 0;
  .item {
    flex-grow: 1;
    &:first-child {
      margin: 0 20px 0 0;
    }
  }
`;

export default FilterModal;
