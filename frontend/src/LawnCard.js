import React from "react";

function LawnCard({lawn}) {

    if (lawn.reviews !== undefined && lawn.reviews.length > 0) {
        return (
            <div className="lawn-card">
                <div className="lawn-pic">
                    <img alt= {lawn.id} src={lawn.image_url} className="lawn" />
                </div>
                <div className="lawn-deets">
                    <a href={'/lawns/' + lawn.id}>
                        <h2>{lawn.name}</h2>
                    </a>
                    <p className="address">{lawn.address}</p>
                    <p>{lawn.reviews?.map((lawn) => lawn.stars).reduce((a, b) => a+b) / lawn.reviews?.length}/5 stars</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="lawn-card">
                <div className="lawn-pic">
                    <img src={lawn.image_url} alt={lawn.id} className="lawn" />
                </div>
                <div className="lawn-deets">
                    <a href={'/lawns/' + lawn.id}>
                        <h2>{lawn.name}</h2>
                    </a>
                    <p className="address">{lawn.address}</p>
                    <p  className="no-reviews">No reviews yet!</p>
                </div>
            </div>
        )
    }

}
export default LawnCard