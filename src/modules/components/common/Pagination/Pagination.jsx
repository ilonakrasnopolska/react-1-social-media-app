import React from "react";

//Блок пагинации
export const Pagination = ({ pages, Classes, currentPage, changePage, setCurrentPageAction }) => {
  return (
    <div className={Classes.pagination}>
      {pages.map((p) => (
        <button
          key={p}
          className={currentPage === p ? Classes.selectedPage : ""}
          onClick={() => changePage(setCurrentPageAction, p)} // Обработчик для изменения текущей страницы
        >
          {p}
        </button>
      ))}
    </div>
  );
};
