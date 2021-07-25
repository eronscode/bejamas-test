import { ArrowLeftIcon, ArrowRightIcon } from "@utils/icons";
import { PaginationWrapper } from "./styles";

function Pagination(props) {
  const { length, prev, next, currentPage, click } = props;
  const pad = [...Array(length)].map((e, i) => (
    <button
      key={i}
      className={currentPage == i + 1 ? "active" : null}
      onClick={() => click(i + 1)}
    >
      {i + 1}
    </button>
  ));

  return (
    <PaginationWrapper>
      <div className="pagination">
        {prev !== null && (
          <button
            disabled={prev === null ? true : false}
            onClick={() => click(prev)}
          >
            <ArrowLeftIcon />
          </button>
        )}
        {pad}
        {next !== null && (
          <button
            disabled={next === null ? true : false}
            onClick={() => click(next)}
          >
            <ArrowRightIcon />
          </button>
        )}
      </div>
    </PaginationWrapper>
  );
}

export default Pagination;
