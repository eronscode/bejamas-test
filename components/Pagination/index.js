function Pagination(props) {
  const { length, prev, next, currentPage, click } = props;
  const pad = [...Array(props.length)].map((e, i) => (
    <button
      key={i}
      className={props.currentPage == i + 1 ? "active" : null}
      onClick={() => props.click(i + 1)}
    >
      {i + 1}
    </button>
  ));

  return (
    <PaginationWrapper>
      <div className="pagination">
        <button
          disabled={props.prev === null ? true : false}
          onClick={() => props.click(props.prev)}
        >
          &laquo;
        </button>
        {pad}
        <button
          disabled={props.next === null ? true : false}
          onClick={() => props.click(props.next)}
        >
          &raquo;
        </button>
      </div>
    </PaginationWrapper>
  );
}

export default Pagination;
