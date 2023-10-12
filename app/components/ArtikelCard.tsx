import React from "react";
import Link from "next/link";

interface Props {
  url: string;
  name: string;
  id: number;
}

const ArtikelCard = (props: Props) => {
  return (
    <div className="card card-bordered w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80"
          alt={props.name}
        />
      </figure>
      <div className="card-body dark:bg-green-600">
        <h2 className="card-title">{props.id}</h2>
        <p>{props.name}</p>
        <div className="card-actions justify-end">
          <Link className="italic" href={`/angeln/${props.id}`}>
            Weiterlesen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelCard;
