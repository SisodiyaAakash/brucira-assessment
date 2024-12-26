import React, { useState, useEffect } from "react";
import './assets/style/App.scss';
import Loader from "./comps/loading";
import Header from "./comps/header";
import HeroSection from "./comps/heroSection";

function App() {
  const [homeData, setHomeData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch home.json
        const homeResponse = await fetch("/json/home.json");
        const homeJson = await homeResponse.json();

        // Fetch team.json
        const teamResponse = await fetch("/json/team.json");
        const teamJson = await teamResponse.json();

        // Set both data states
        setHomeData(homeJson);
        setTeamData(teamJson);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!homeData || !teamData) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <Header />
      <HeroSection
        data={homeData.heroSection}
        team={teamData.team}
      />
    </>
  );
}

export default App;
