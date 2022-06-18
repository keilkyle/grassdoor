import React from "react";

function LawnCard({lawn}) {

    if (lawn.reviews == null || lawn.reviews.length > 0) {
        return (
            <>
                <a href={'/lawns/' + lawn.id}>
                    <h1>{lawn.name}</h1>
                </a>
                <p>{lawn.reviews?.map((lawn) => lawn.stars).reduce((a, b) => a+b) / lawn.reviews?.length}/5 stars</p>
                <h2>{lawn.address}</h2>
                <img src={lawn.image_url} className="lawn" />
            </>
        )
    } else {
        return (
            <>
                <a href={'/lawns/' + lawn.id}>
                    <h1>{lawn.name}</h1>
                </a>
                <p>No reviews yet!</p>
                <h2>{lawn.address}</h2>
                <img src={lawn.image_url} className="lawn" />
            </>
        )
    }

}
export default LawnCard