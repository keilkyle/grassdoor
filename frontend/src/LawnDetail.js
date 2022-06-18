import React, {useEffect, useState} from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview"

function LawnDetail() {

    const [lawn, changelawn] = useState([])

    function deleteHandler(obj) {
        const newReviews = lawn.reviews.filter((review) => review.id !== obj.id)
        const newLawns = {...lawn}
        newLawns.reviews = newReviews 
        changelawn(newLawns)
    }

    function editHandler(obj) {
        const otherReviews = lawn.reviews.filter((review) => review.id !== obj.id)
        const newLawns = {...lawn}
        const newReviews = [...otherReviews, obj]
        newLawns.reviews = newReviews.sort((a,b) => a.id > b.id ? 1 : -1)
        changelawn(newLawns)
    }

    function addReviewer(obj) {
        const newReviews = [...lawn.reviews, obj]
        const newLawns = {...lawn, reviews: newReviews}
        changelawn(newLawns)
    }

    useEffect(() => {
        fetch(`http://localhost:9292${window.location.pathname}`)
        .then(resp => resp.json())
        .then(data => changelawn(data))
    }, [])
    
    if (lawn.reviews == null || lawn.reviews.length > 0) {
        return (
            <>
                <a href="/">Click here to return home</a>
                <img alt= {lawn.name} src={lawn.image_url} className="lawn" />
                <h1>{lawn.name}</h1>
                <h2>{lawn.address}</h2>
                <p>Users rate this lawn {lawn.reviews ? lawn.reviews?.map((lawn) => lawn.stars)?.reduce((a, b) => a+b) / lawn.reviews?.length  : "none"} stars out of 5.</p>
                {lawn.reviews ? lawn.reviews.map((review) => <ReviewCard editHandler={editHandler} deleteHandler={deleteHandler} key={review.id} review={review} />): "No reviews yet."}
                <AddReview lawn_id={lawn.id} addReviewer={addReviewer}/>
            </>
        )
    } else {
        return (
            <>
                <a href="/">Click here to return home</a>
                <img alt= {lawn.name} src={lawn.image_url} className="lawn" />
                <h1>{lawn.name}</h1>
                <h2>{lawn.address}</h2>
                <p>Users haven't rated this lawn yet.</p>
                <AddReview lawn_id={lawn.id} addReviewer={addReviewer}/>
            </>
        )
    }
}

export default LawnDetail