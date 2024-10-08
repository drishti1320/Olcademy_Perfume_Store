/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PerfumeDetails =({ perfumes })=> {
   const { id } = useParams();
   const [perfumeDetails, setPerfumeDetails] = useState({});

   useEffect(() => {
     const filteredPerfume = perfumes.find((perfume) => perfume.id === id); 
     if (filteredPerfume) {
      setPerfumeDetails(filteredPerfume);
    } else {
      console.warn(`No perfume found with id: ${id}`);
      setPerfumeDetails(null);
    }
    
   }, [id, perfumes]);

   return (
     perfumeDetails && (
       <div className="perfume-details">
         <img src={"/"+perfumeDetails.image}  alt={perfumeDetails.name} />
         <h1>{perfumeDetails.name}</h1>
         <p>{perfumeDetails.description}</p>
         <div>
           <h3>Sizes:</h3>
           <ul>
             {perfumeDetails.sizes && perfumeDetails.sizes.map((element) => (
               <li key={element}>{element}</li>
             ))}
           </ul>
         </div>
         <div>
           <h3>Reviews:</h3>
           <ul>
             {perfumeDetails.reviews && perfumeDetails.reviews.map((review, index) => (
               <li key={index}>
                 <strong>{review.reviewer}</strong> - {review.comment} (Rating: {review.rating})
               </li>
             ))}
           </ul>
         </div>
       </div>
     )
   );
}

export default PerfumeDetails;
