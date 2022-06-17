import React from "react";

function LawnCard({lawn}) {
    return (
        <>
            <a href={'/lawns/' + lawn.id}>
                <h1>{lawn.name}</h1>
            </a>
            <h2>{lawn.address}</h2>
            <img src={lawn.image_url} />
        </>
    )
}
export default LawnCard