import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer() {
function ListingsContainer({listing, setRender, render}) {

  function handleDelete(obj){

    console.log(obj);
    fetch(`http://localhost:6001/listings/${obj.id}`,
    {
      method:'DELETE'
    })
    setRender(!render)
  }

  const displayListing = listing.map((blam)=>{
    return(
      <ListingCard key={blam.id} blam={blam} handleDelete={handleDelete} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        { displayListing }
      </ul>
    </main>
  );
}
export default ListingsContainer;
 