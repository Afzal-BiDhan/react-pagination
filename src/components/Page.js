import React, { useEffect, useState } from 'react';

const PageOld = (props) => {
    const { showPerPage, onPageChange, total } = props;
    console.log(showPerPage);
    const [count, setCount] = useState(1);

    const [numberOfBtn, setNumberOfBtn] = useState(Math.ceil(total / showPerPage));

    useEffect(() => {
        const value = showPerPage * count;
        console.log("start value: ", value - showPerPage);
        console.log("end value: ", value);
        onPageChange(value - showPerPage, value);
    }, [count]);
    const onButtonClick = (type) => {
        if (type === "prev") {
            if (count === 1) {
                setCount(1)
            }
            else {
                setCount(count - 1)
            }
        }
        else if (type === "next") {
            if (numberOfBtn === count) {
                setCount(count);
            }
            else {
                setCount(count + 1);
            }
        }
    }
    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item" onClick={() => onButtonClick('prev')}><a class="page-link" href="!#">Previous</a></li>

                    {
                        new Array(numberOfBtn).fill("").map((el, index) => {
                            return (
                                <li class={`page-item ${index + 1 === count ? "active" : null}`}>
                                    <a onClick={() => setCount(index + 1)} class="page-link" href="!#">{index + 1}</a>
                                </li>
                            )
                        })
                    }
                    <li onClick={() => onButtonClick('next')} class="page-item"><a class="page-link" href="!#">Next</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default PageOld;