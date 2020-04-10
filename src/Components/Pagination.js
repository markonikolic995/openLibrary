import React from 'react';

function Pagination({totalPosts, postsPerPage, paginate}) {
    const pageNumbers = []

    for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage) ; i++){
        pageNumbers.push(i)
    }
    
    return (
        <nav className="pagination">
            <ul className="pagination__list">
                {
                pageNumbers.map( num => (
                    <li key={num} className="pagination__item" >
                        <a href="#" onClick={() => paginate(num)} className="pagination__link">
                            {num}
                        </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    );
}

export default Pagination;