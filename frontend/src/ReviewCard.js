import React from "react";

function ReviewCard({deleteHandler, editHandler, review}) {
    
    function deleteReview() {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => deleteHandler(data))
    }

    function addStar() {
        const newStars = review.stars + 1
        const newReview = {...review, stars: newStars}

        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => editHandler(data))
    }

    return (
        <>
            <p>{review.author}</p>
            <p>{review.body}</p>
            <p>{"Stars: "+ review.stars}</p>
            <button onClick={deleteReview}>Delete Review</button>
            <button onClick={addStar}>Add a Star to this Review!</button>
        </>
    )
}

export default ReviewCard