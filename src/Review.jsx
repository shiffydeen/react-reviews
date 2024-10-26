import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review () {
   
    const [value, setValue] = useState(0);
    const [reviews, setReviews] = useState(people);

    const {name, job, image, text} = reviews[value];

    const checkCount = (num) => {
        if (num > reviews.length - 1) {
            return 0
        } else if (num < 0) {
            return reviews.length - 1
        } else {
            return num
        }
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4>{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button 
                    className="prev-btn"
                    onClick={() => setValue((count) => {
                        const newCount = count - 1;
                        return checkCount(newCount);
                    })}    >
                    <FaChevronLeft />
                </button>
                <button 
                    className="next-btn"
                    onClick={() => setValue((count) => {
                        const newCount = count + 1;
                        return checkCount(newCount);
                    })}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="btn btn-hipster">surprise me</button>
        </article>
    )
}