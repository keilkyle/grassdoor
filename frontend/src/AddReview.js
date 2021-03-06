import React, {useState} from 'react'

function AddReview ({addReviewer, lawn_id}) {
    
    const [author, authorChanger] = useState("")
    const [body, bodyChanger] = useState("")
    const [stars, starsChanger] = useState("")

    function submitHandler(e) {
        e.preventDefault()

        const newReview = {
            author: author,
            body: body,
            stars: stars,
            lawn_id: lawn_id
        }

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => addReviewer(data))

        authorChanger("")
        bodyChanger("")
        starsChanger("")
    }

    return (
        <>
        <h2>Add your review of this lawn!</h2>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input
                type="text"
                name="author"
                label="author"
                value={author}
                onChange={(e) => authorChanger(e.target.value)}
            />
            <label>Review</label>
            <textarea
                className="big-input"
                type="text"
                rows="3"
                name="body"
                label="body"
                value={body}
                onChange={(e) => bodyChanger(e.target.value)}
            ></textarea>
            <label>Stars</label> 
            <input
                type="text"
                name="stars"
                label="stars"
                value={stars}
                onChange={(e) => starsChanger(e.target.value)}
            />
            <button type="submit">Submit Review</button>
        </form>
        </>
  
    )
    }

export default AddReview
