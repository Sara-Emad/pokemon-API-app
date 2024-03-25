const Pagination = ({ goToPrevPage, goToNextPage  }) => {
  return (
    <>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous page</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next Page</button>}
    </>
  );
};

export default Pagination;
