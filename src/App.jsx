import React, { useState, useEffect } from "react";
import './assets/style/App.scss';
import Loader from "./comps/loading";
import Header from "./comps/header";
import Footer from "./comps/footer";
import HeroSection from "./comps/heroSection";
import PartnersLogoSection from "./comps/partnersLogoSection";
import Faq1Section from "./comps/faq1Section";
import GlobalNumberSection from "./comps/globalNumberSection";

function App() {
  const [homeData, setHomeData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
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

        // Fetch statistics.json
        const statisticsResponse = await fetch("/json/statistics.json");
        const statisticsJson = await statisticsResponse.json();

        // Set both data states
        setHomeData(homeJson);
        setTeamData(teamJson);
        setStatisticsData(statisticsJson);
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

  if (!homeData || !teamData || !statisticsData) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <Header />

      <HeroSection
        data={homeData.heroSection}
        team={teamData.team}
      />
      <PartnersLogoSection data={homeData.partnersLogoSection} />
      <Faq1Section data={homeData.faq1Section} />
      <GlobalNumberSection
        data={homeData.globalNumberSection}
        stats={statisticsData.stats}
      />

      <Footer />
    </>
  );
}

export default App;
