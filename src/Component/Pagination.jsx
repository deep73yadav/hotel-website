import React from 'react'
import ReactPaginate from "react-paginate";
const Pagination = ({totalpage,pagesize,pageChange}) => {
  return (
    <>
    <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"................."}
        pageCount={Math.ceil(totalpage/pagesize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        onPageChange={pageChange}
      />
    </>
  )
}

export default Pagination