import React from "react";

interface Photo {
  id: number;
  name: string;
  url: string;
}

const useGetArtikel = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const photos: Photo[] = await res.json();
  return photos;
};

export default useGetArtikel;
