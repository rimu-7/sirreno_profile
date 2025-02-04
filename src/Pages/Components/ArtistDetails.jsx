// ArtistDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { artists } from "../../assets/artistData";
import Footer from "../Shared/Footer/Footer";


const ArtistDetails = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  if (!artist) return <h2 className="text-center text-red-500">Artist not found</h2>;
  
  return (
    <div className="">
      <div className="p-5 text-center">
      <h1 className="text-3xl font-bold mb-3">{artist.name}</h1>
      <p className="mb-2 text-lg">{artist.description}</p>
      <p className="mb-2"><strong>Hobbies:</strong> {artist.hobby.join(", ")}</p>
      <p className="mb-2"><strong>Interests:</strong> {artist.interests.join(", ")}</p>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 mt-5">
        {artist.images.map((img, index) => (
          <img key={index} src={img} alt={`${artist.name} ${index + 1}`} className="w-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ArtistDetails;
