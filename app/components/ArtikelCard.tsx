import React from "react";
import Link from "next/link";

const ArtikelCard = () => {
  return (
    <div className="card card-bordered w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href="" className="italic">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtikelCard;
