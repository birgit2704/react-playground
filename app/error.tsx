"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error:", error);
  //use a log tool like sentry to persist the errors
  //use the button only on specific pages to not spam the log tool

  return (
    <>
      <h1>Ein unerwarteter Fehler ist eingetreten.</h1>
      <button className="btn" onClick={() => reset()}>
        Neuer Versuch
      </button>
    </>
  );
};

export default ErrorPage;
