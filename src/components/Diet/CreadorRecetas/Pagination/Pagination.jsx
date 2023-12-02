import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Pagination = ({ recipesPerPage, totalRecipes, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  if (totalRecipes === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex justify-center items-center">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="focus:outline-none"
      >
        <MdArrowBackIos className="text-white w-8 h-8 hover:scale-125 hover:text-text-sec transition-transform duration-200" />
      </button>
      <span className="text-white font-bold uppercase text-lg px-2 mx-2 select-none">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="focus:outline-none"
      >
        <MdArrowForwardIos className="text-white w-8 h-8 hover:scale-125 hover:text-text-sec transition-transform duration-200" />
      </button>
    </div>
  );
};

export default Pagination;
