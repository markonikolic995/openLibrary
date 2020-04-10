import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Form(props) {

    const [ inputValue, setInputValue ] = useState('')
    const [ books, setBooks ] = useState([])

    const handleChange = (e) => {
        let inputValue = e.target.value
        setInputValue(inputValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('http://openlibrary.org/search.json?q=' + inputValue)
            .then( res => {
                setBooks( res.data.docs )
            })
            .catch( err => {
                console.log(err)
            })
    }

    useEffect( () => {
        const { listBooks } = props
        listBooks(books)
    })

    return (
        <div className="form-box">
            <h1 className="form-box__heading">OpenLibrary</h1>
            <form action="" onSubmit={handleSubmit} className="form">
                <input type="text" onChange={handleChange} className="form__input"/>
                <button type="submit" className="form__btn">Search</button>
            </form>
        </div>
    );
}

export default Form;