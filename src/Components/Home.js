import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';
import Pagination from './Pagination';

function Home(props) {
    const [ books, setBooks ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage ] = useState(4)

    const totalPosts = books.length
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const handleListBooks = (books) => setBooks(books)
    
    console.log(books)

    return (
        <div>
            <Form listBooks={handleListBooks} />
            <div className="list-books">
                <div className="row">
                    {
                    currentPosts.map( ( book , index ) => {
                        if(book.hasOwnProperty('isbn')){
                            return <Card index= {index} nameID='isbn' id={book.isbn} book={book} />
                        }
                        else if(book.hasOwnProperty('oclc')){
                            return <Card index= {index} nameID='oclc' id={book.oclc} book={book} />
                        }
                        else if(book.hasOwnProperty('lccn')){
                            return <Card index= {index} nameID='lccn' id={book.lccn} book={book} />
                        }
                        else if(book.hasOwnProperty('olid')){
                            return <Card index= {index} nameID='olid' id={book.olid} book={book} />
                        }
                        else {
                            return <Card index= {index} id={['']} book={book} />
                        }
                    })
                    }
                </div>
            </div>
            <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} paginate={paginate} />
        </div>
    );
}

export default Home;