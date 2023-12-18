import React, { useState } from "react";

function ListingCard({ blam, handleDelete }) {
  const [isStarred, setIsStarred] = useState(true);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        {/* These placeholders might need proper data */}
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
        <img src={blam.image} alt={blam.description} />
      </div>
      <div className="details">
        {/* Ternary operator that checks isStarred state */}
        {isStarred ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{blam.description}</strong>
        <span> · {blam.location}</span>
        <button onClick={() => handleDelete(blam)} className="emoji-button delete">🗑</button>
        {/* Toggle button for isStarred state */}
        <button onClick={() => setIsStarred(!isStarred)} className="emoji-button favorite">
          {isStarred ? "☆" : "★"}
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
