import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function BookDetails(props) {

    const { id } = useParams()
    const { nameID } = useParams()
    const [ title, setTitle ] = useState()
    const [ authors, setAuthors ] = useState()
    const [ publish_date, setPublishDate ] = useState()
    const [ number_of_pages, setNumberOfPages ] = useState()
    const [ publisher, setPublisher ] = useState()
    const [ publish_places, setPublishPlaces ] = useState()
    const [ weight , setWeight ] = useState()
    const [ img , setImg ] = useState()

    useEffect( () => {
        axios.get('https://openlibrary.org/api/books?bibkeys=' + nameID + ':' + id + '&format=json&jscmd=data')
            .then( res => {
                if(res.data[nameID + ':' + id].hasOwnProperty('title')){
                    setTitle(res.data[nameID + ':' + id].title)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('authors')){
                    setAuthors(res.data[nameID + ':' + id].authors[0].name)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('publish_date')){
                    setPublishDate(res.data[nameID + ':' + id].publish_date)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('number_of_pages')){
                    setNumberOfPages(res.data[nameID + ':' + id].number_of_pages)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('publishers')){
                    setPublisher(res.data[nameID + ':' + id].publishers[0].name)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('publish_places')){
                    setPublishPlaces(res.data[nameID + ':' + id].publish_places[0].name)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('weight')){
                    setWeight(res.data[nameID + ':' + id].weight)
                }
                if(res.data[nameID + ':' + id].hasOwnProperty('cover')){
                    if(res.data[nameID + ':' + id].cover.hasOwnProperty('large')){
                        setImg(res.data[nameID + ':' + id].cover.large)
                    }
                    else if(res.data[nameID + ':' + id].cover.hasOwnProperty('medium')){
                        setImg(res.data[nameID + ':' + id].cover.medium)
                    }
                    else if(res.data[nameID + ':' + id].cover.hasOwnProperty('small')){
                        setImg(res.data[nameID + ':' + id].cover.small)
                    }
                }
            })
    })

    return (
        <div className="details">
            <p>Back to <Link to="/"> <span> &larr; Home</span> </Link ></p>
            <div className="row">
                <div className="col-1-od-3">
                    <div className="img-box">
                        <img src={img} alt="Cover photo doesn't exist"/>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <ul className="details__list">
                        <li className="details__item">Title</li>
                        <li className="details__item">Authors</li>
                        <li className="details__item">Publish date</li>
                        <li className="details__item">Number of pages</li>
                        <li className="details__item">Publisher</li>
                        <li className="details__item">Publish places</li>
                        <li className="details__item">Weight</li>
                    </ul>
                </div>

                <div className="col-1-of-3">
                    <ul className="details__list1">
                        <li className="details__item1">{title}</li>
                        <li className="details__item1">{authors}</li>
                        <li className="details__item1">{publish_date}</li>
                        <li className="details__item1">{number_of_pages}</li>
                        <li className="details__item1">{publisher}</li>
                        <li className="details__item1">{publish_places}</li>
                        <li className="details__item1">{weight}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;