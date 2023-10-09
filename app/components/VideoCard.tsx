import React from "react";
import Link from "next/link";

const VideoCard = () => {
  return (
    <div className="card card-bordered w-80 bg-base-100 shadow-xl grid grid-rows-2">
      <div className="pt-3">
        {/* <iframe
          className="absolute inset-0 h-[50%] w-full rounded-t-2xl"
          src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
        ></iframe> */}
      </div>
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

export default VideoCard;
