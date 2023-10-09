import useGetArtikel from "@/app/hooks/useGetArtikel";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const ArtikelDetailPage = async ({ params }: Props) => {
  const id = parseInt(params.id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const photo = await res.json();

  if (!photo) notFound();

  return (
    <div>
      <p>{photo.name}</p>
      <p>{photo.id}</p>
    </div>
  );
};

export default ArtikelDetailPage;
