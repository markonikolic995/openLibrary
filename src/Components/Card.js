import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    let author = []
    if(props.book.hasOwnProperty('author_name')){
        author = props.book.author_name.join(', ')
    }
    else {
        author = ['unknown']
    }

    let year = []
    if(props.book.hasOwnProperty('first_publish_year')){
        year = props.book.first_publish_year
    }
    else {
        year = ['unknown']
    }

    return (
        <div className="col-1-of-4">
            <div className="card">
                <div className="card__title-box">
                    <h2 className="card__title">{props.book.title}</h2>
                </div>
                <div className="card__author-box">
                    <h3 className="card__author">{author}</h3>
                </div>
                <div className="card__year-box">
                    <h4 className="card__year">{year}</h4>
                </div>
                <Link to={'/book/'+ props.nameID + '/' + props.id[0]}>
                    <button className="card__btn">See more &rarr;</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;