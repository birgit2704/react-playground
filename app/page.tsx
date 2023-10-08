import React from "react";
import SecondaryNavbar from "./components/SecondaryNavbar";
import ArtikelCard from "./components/ArtikelCard";
import VideoCard from "./components/VideoCard";

const Home = () => {
  return (
    <main className="mx-auto">
      <h1 className="text-center mb-5">HomePage</h1>
      <SecondaryNavbar />
      <section className="pb-5">
        <h2 className="text-center">Unsere neuesten Artikel</h2>
        <div className="flex justify-around">
          <ArtikelCard />
          <ArtikelCard />
          <ArtikelCard />
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-center">Unsere neuesten Videos</h2>
        <div className="flex justify-around">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
