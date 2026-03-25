import React, { Children, cloneElement, Component, useEffect, useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const PAGW = 100

export const Carousel = ({children, onIndexChange}) => {
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
        Children.map(children, (child, index) => {
        let activeIndex;
        if (offset === 100) activeIndex = 0;
        else if (offset === 0) activeIndex = 1;
        else if (offset === -100) activeIndex = 2;

        const isActive = index === activeIndex;

        onIndexChange(activeIndex);

        const extraShift = isActive ? 0 : 20;

        return cloneElement(child, {
            // activeIndex: currentActiveIndex,
            style: {
            ...child.props.style,
            // Оставляем ваш обязательный параметр и добавляем масштаб
            transform: `translateX(${offset - (index > activeIndex ? extraShift : -extraShift)}%) scale(${isActive ? 1 : 0.5})`,
            transition: 'all 500ms ease-in-out',
            height: '100%',
            minWidth: `${PAGW}%`,
            maxWidth: `${PAGW}%`,
            borderRadius: 100,
            },
        });
        })
    );
}, [offset, children, onIndexChange]);

    // render() {
    return (
        <div className = "main-container">
            <FaChevronLeft className = "arrow" onClick={handleLeftArrowClick}/>
            <div className = "window">
                <div className= "all-pages-container"
                style={{
                    transform: `translateX(-100%)`,
                }}
                >{pages}</div>
            </div>
            <FaChevronRight className = "arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}