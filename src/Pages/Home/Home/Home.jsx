import React, { useEffect, useState } from "react";
import Carousel from "../Caroussel/Carousel";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";


function Home() {
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/get-api")
  //     .then((response) => {
  //       setImages(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(fconst [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/get-api")
  //     .then((response) => {
  //       setImages(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen text-white bg-[#212121]">
  //       <Loading />
  //     </div>
  //   );
  // }alse);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen text-white bg-[#212121]">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="h-screen   text-center items-center flex justify-center text-2xl text-white">
      <Carousel />
    </div>
  );
}

export default Home;
