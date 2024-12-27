import React, { useState, useEffect } from "react";
import './assets/style/App.scss';
import Loader from "./comps/loading";
import Header from "./sections/header";
import Footer from "./sections/footer";
import HeroSection from "./sections/heroSection";
import PartnersLogoSection from "./sections/partnersLogoSection";
import Faq1Section from "./sections/faq1Section";
import GlobalNumberSection from "./sections/globalNumberSection";
import TestimonialSection from "./sections/testimonialSection";
import Faq2Section from "./sections/faq2Section";
import ContactSection from "./sections/contactSection";
import LabelSliderSection from "./sections/labelSliderSection";

function App() {
  const [homeData, setHomeData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [statisticsData, setStatisticsData] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);
  const [sliderLabelData, setSliderLabelData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch home.json
        const homeResponse = await fetch("/json/home.json");
        const homeJson = await homeResponse.json();

        // Fetch team.json
        const teamResponse = await fetch("/json/comps/team.json");
        const teamJson = await teamResponse.json();

        // Fetch statistics.json
        const statisticsResponse = await fetch("/json/comps/statistics.json");
        const statisticsJson = await statisticsResponse.json();

        // Fetch reviews.json
        const reviewsResponse = await fetch("/json/comps/reviews.json");
        const reviewsJson = await reviewsResponse.json();

        // Fetch label-slider.json
        const sliderLabelResponse = await fetch("/json/comps/label-slider.json");
        const sliderLabelJson = await sliderLabelResponse.json();

        // Set both data states
        setHomeData(homeJson);
        setTeamData(teamJson);
        setStatisticsData(statisticsJson);
        setReviewsData(reviewsJson);
        setSliderLabelData(sliderLabelJson);
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
      <TestimonialSection
        data={homeData.testimonialSection}
        reviews={reviewsData.reviews}
      />
      <Faq2Section data={homeData.faq2Section} />
      <ContactSection
        data={homeData.contactSection}
        team={teamData.team}
      />
      <LabelSliderSection labels={sliderLabelData.labels} />

      <Footer />
    </>
  );
}

export default App;
