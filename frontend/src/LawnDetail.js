import React, {useEffect, useState} from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview"
import LawnCard from "./LawnCard";

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
        debugger
        changelawn(newLawns)
    }

    useEffect(() => {
        fetch(`http://localhost:9292${window.location.pathname}`)
        .then(resp => resp.json())
        .then(data => {
            changelawn(data)})
    }, [])
    
    if (lawn.reviews !== undefined && lawn.reviews.length > 0) {
        return (
            <>
                <div className="left">
                    <LawnCard lawn={lawn} key={lawn.id} />
                    {lawn.reviews.map((review) => <ReviewCard editHandler={editHandler} deleteHandler={deleteHandler} key={review.id} review={review} />)}
                </div>
                <div className="right">
                    <AddReview lawn_id={lawn.id} addReviewer={addReviewer}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="left">
                    <LawnCard lawn={lawn} key={lawn.id} />
                </div>
                <div className="right">
                    <AddReview lawn_id={lawn.id} addReviewer={addReviewer}/>
                </div> 
            </>
        )
    }
}

export default LawnDetail