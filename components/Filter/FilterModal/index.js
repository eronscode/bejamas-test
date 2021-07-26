import { useState } from "react";
import Button from "@components/Button";
import Modal from "@components/Modal";
import { color, mixins } from "@styles/styleUtils";
import styled  from "styled-components";
import FilterSideBar from "../FilterSideBar";
import { useAppContext } from "context/app.context";
import { isEmpty } from "lodash";

function FilterModal({ isOpen, toggleModal = () => {} }) {
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState(null);

  const { filterProductsByCategory, filterProductsByPrice } = useAppContext();

  function handleCategoryFilter(values) {
    setCheckedCategory(values);
  }

  function handlePriceFilter(values) {
    setCheckedPrice(values);
  }

  function closeModal() {
    toggleModal();
  }
  function clearModal() {
    setCheckedCategory([]);
    setCheckedPrice(null);
    filterProductsByCategory([]);
    filterProductsByPrice(null);
    toggleModal();
  }

  function saveFilters() {
    filterProductsByCategory(checkedCategory);
    filterProductsByPrice(checkedPrice);
    toggleModal();
  }

  const isDisabled = isEmpty(checkedCategory) && isEmpty(checkedPrice);

  return (
    <ModalWrapper>
      {isOpen && (
        <Modal
          ModalTitle="Filter"
          className="hidden-lg"
          toggleModal={closeModal}
          isOpen={isOpen}
        >
          <div style={{ height: "100vh" }}>
            <ModalContent>
              <FilterSideBar
                handleCategoryFilter={handleCategoryFilter}
                handlePriceFilter={handlePriceFilter}
                checkedCategory={checkedCategory}
                checkedPrice={checkedPrice}
              />
            </ModalContent>
          </div>
          <ModalFooter>
            <div className="item">
              <Button variant="secondary" onClick={clearModal}>
                Clear
              </Button>
            </div>
            <div className="item">
              <Button disabled={isDisabled} onClick={saveFilters}>
                Save
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      )}
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
  border-top: 4px solid ${color.secondary.inc1};
  bottom: 0;
  .item {
    flex-grow: 1;
    &:first-child {
      margin: 0 20px 0 0;
    }
  }
`;

export default FilterModal;
