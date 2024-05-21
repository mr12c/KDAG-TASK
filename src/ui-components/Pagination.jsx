import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setInstituteCurrentPage } from '../App/AppSlice';


const Page = ({ totalPages }) => {

  const disptch  = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{disptch(setInstituteCurrentPage(currentPage))},[currentPage])

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) {
        pages.push(1);
        if (currentPage > 4) {
          pages.push('...');
        }
      }
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) {
        if (currentPage < totalPages - 4) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    return pages.map((page, index) =>
      page === '...' ? (
        <span key={index} className="pagination-dots">
          {page}
        </span>
      ) : (
        <button
          key={index}
          className={`pagination-page-number ${currentPage === page ? 'pagination-active' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="pagination-container">
      <button className="pagination-arrow" onClick={handlePrev} disabled={currentPage === 1}>
        &lt;
      </button>
      {renderPageNumbers()}
      <button className="pagination-arrow" onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Page;
