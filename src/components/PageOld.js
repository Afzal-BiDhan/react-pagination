import React, { useEffect, useState } from 'react';

const Page = (props) => {
    const { showPerPage, onPageChange, total } = props;
    console.log(showPerPage);
    const [count, setCount] = useState(1);

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
            if (Math.ceil(total / showPerPage) === count) {
                setCount(count);
            }
            else {
                setCount(count + 1);
            }
        }
    }
    return (
        <div className="d-flex justify-content-between mt-5 mb-5">
            <button className="btn btn-primary" onClick={() => onButtonClick('prev')}>previous</button>
            <button className="btn btn-primary" onClick={() => onButtonClick('next')}>next</button>
        </div>
    );
};

export default Page;