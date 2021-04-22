import React, { useEffect, useState } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const value = showPerPage * counter
        const startValue = value - showPerPage
        const endValue = value
        onPaginationChange(startValue, endValue)
    }, [counter])

    // const prev = () => {
    //     if (counter === 1) {
    //         setCounter(1)
    //     }
    //     else {
    //         setCounter(counter - 1)
    //     }
    // }
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
            if (counter === Math.ceil(total / showPerPage)) {
                setCounter(counter)
            }
            else {
                setCounter(counter + 1)
            }
        }
    }
    return (
        <div className="d-flex justify-content-between">

            <button className="btn btn-primary" onClick={() => onButtonClick("prev")}>Previous</button>
            <button className="btn btn-primary" onClick={() => onButtonClick("next")}>Next</button>
        </div>
    )
}

export default Pagination
