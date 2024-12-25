import React, { useState, useEffect } from "react";
import './assets/style/App.scss'
import Loader from "./comps/loading";
import Header from "./comps/header"
import HeroSection from "./comps/heroSection";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/home.json");
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <Header />
      <HeroSection data={data.heroSection} />
    </>
  );
}

export default App;
