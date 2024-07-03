import React from 'react';

const Results = ({ score, total }) => {
    return (
        <div>
            <div >Results</div>
            <p>Your score: {score} / {total}</p>
        </div>
    );
};

export default Results;

