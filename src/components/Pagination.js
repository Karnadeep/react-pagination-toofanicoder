import React, { useEffect, useState } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1)
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerPage))
    useEffect(() => {
        const value = showPerPage * counter
        const startValue = value - showPerPage
        const endValue = value
        onPaginationChange(startValue, endValue)
    }, [counter])


    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            }
            else {
                setCounter(counter - 1)
            }

        }
        else if (type === "next") {
            if (counter === numberOfButtons) {
                setCounter(counter)
            }
            else {
                setCounter(counter + 1)
            }
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="!#" onClick={() => onButtonClick("prev")}>Previous</a></li>
                    {new Array(numberOfButtons).fill("").map((el, index) => (
                        <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                            <a className="page-link" onClick={() => setCounter(index + 1)}>
                                {index + 1}</a></li>
                    ))
                    }
                    <li class="page-item"><a class="page-link" href="!#" onClick={() => onButtonClick("next")}>Next</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Pagination
