import useGetArtikel from "@/app/hooks/useGetArtikel";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { page: string };
}

const NextPage = async ({ params }: Props) => {
  const page = parseInt(params.page);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${page}`);
  const photo = await res.json();

  if (!photo) notFound();

  return (
    <div>
      <h1>Next</h1>
      <p>{photo.name}</p>
      <p>{photo.id}</p>
    </div>
  );
};

export default NextPage;
