import React from 'react'
import ReactPaginate from 'react-paginate'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getBreweries }  from '../stores/actions'

const Pagination = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const currentPath = router.pathname
  const currentQuery = router.query

  const pagginationHandler = (page) => {
    currentQuery.page = page.selected + 1
    dispatch(getBreweries(currentQuery.page, currentQuery.type))
    router.push({
        pathname: currentPath,
        query: currentQuery,
    })
  };

  return (
    <Row around="xs">
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages-pagination'}
        pageCount={3}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={pagginationHandler}
      />
    </Row>
  );
};


export default Pagination;
