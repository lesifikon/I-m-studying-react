import React, { Children, cloneElement, Component, useEffect, useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const PAGW = 100

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
        const nowOffset = currentOffset + PAGW

        return Math.min(nowOffset, +100)
        }) 
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const nowOffset = currentOffset - PAGW

            return Math.max(nowOffset, -100)
        })
    }

    useEffect(() => {
setPages(
    Children.map(children, child => {
        return cloneElement(child, {
            style: {
                transform: 'translateX(-100%)',
                height: '100%', 
                minWidth: `${PAGW}%`,
                maxWidth: `${PAGW}%`,
                borderRadius: 100,
            },
        })
    })
)
    }, [])

    // render() {
    return (
        <div className = "main-container">
            <FaChevronLeft className = "arrow" onClick={handleLeftArrowClick}/>
            <div className = "window">
                <div className= "all-pages-container"
                style={{
                    transform: `translateX(${offset}%)`,
                }}
                >{pages}</div>
            <FaChevronRight className = "arrow" onClick={handleRightArrowClick}/>
            </div>
        </div>
    )
}