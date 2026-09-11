import React from "react";
import { useClerk, useUser } from "@clerk/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import StitchCategoriesSection from "../components/home/StitchCategoriesSection";
import FeaturedTailorsSection from "../components/home/FeaturedTailorsSection";
import AudienceSection from "../components/home/AudienceSection";

const Home = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();

  const handleSignIn = () => {
    openSignIn();
  };

  const handleSignUp = () => {
    openSignUp();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fcfaf7] text-[#172033]">
      <Navbar />

      <main>
        <HeroSection
          isSignedIn={isSignedIn}
          onSignIn={handleSignIn}
        />

        <HowItWorksSection />

        <StitchCategoriesSection />

        <FeaturedTailorsSection />

        <AudienceSection />
      </main>

      <Footer
        isSignedIn={isSignedIn}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default Home;