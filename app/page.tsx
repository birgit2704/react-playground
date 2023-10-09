import React from "react";
import SecondaryNavbar from "./components/SecondaryNavbar";
import ArtikelCard from "./components/ArtikelCard";
import VideoCard from "./components/VideoCard";
import useGetArtikel from "./hooks/useGetArtikel";

// (moved to hooks)
// interface Photo {
//   id: number;
//   name: string;
//   url: string;
// }

const Home = async () => {
  // (moved to hooks)
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const photos: Photo[] = await res.json();

  const photos = await useGetArtikel();

  return (
    <main className="mx-auto">
      <h1 className="text-center mb-5">HomePage</h1>
      <SecondaryNavbar />
      <section className="pb-5">
        <h2 className="text-center">Unsere neuesten Artikel</h2>
        <div className="flex justify-around flex-wrap mx-2 gap-3">
          {photos.map((photo) => (
            <ArtikelCard name={photo.name} id={photo.id} url={photo.url} />
          ))}
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
