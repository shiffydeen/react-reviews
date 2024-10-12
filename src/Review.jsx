import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review () {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkIndex = (number) => {
        if (number > (people.length - 1)) {
            return 0
        } else if (number < 0) {
            return (people.length - 1)
        } else {
            return number
        }
     }

    return (
        <>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="button-container">
                    <button 
                        className="prev-btn" 
                        onClick={() => {
                            setIndex((currentIndex) => {
                                let prevIndex = currentIndex - 1
                                return checkIndex(prevIndex)
                            })
                        }}>
                            <FaChevronLeft />
                    </button>
                    <button 
                        className="next-btn"
                        onClick={() => {
                            setIndex((currentIndex) => {
                                let prevIndex = currentIndex + 1
                                return checkIndex(prevIndex)
                            })
                        }}>
                        <FaChevronRight />
                    </button>
                </div>
                <button 
                    className="random-btn"
                    onClick={() => {
                        let randomNum = Math.floor(Math.random() * people.length);
                        console.log(randomNum)
                        if (randomNum === index) {
                            randomNum = index + 1
                        }
                        setIndex(checkIndex(randomNum))
                    }}>
                        surprise me
                    </button>
            </article>
        </>
    )
}