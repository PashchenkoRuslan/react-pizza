import React from 'react';
import styles from './Pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/allSortSlice';

const Pagination = ({ totalPages }) => {
  const currentPage = useSelector((state) => state.allSort.currentPage);

  const dispatch = useDispatch();
  const searchRef = React.useRef();

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.wrapper}>
        <li className={` ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            ref={searchRef}
            className={`${styles['page-item']}`}
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}>
            back
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button
              className={`${styles['page-item']}`}
              onClick={() => dispatch(setCurrentPage(number))}>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className={`${styles['page-item']}`}
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
