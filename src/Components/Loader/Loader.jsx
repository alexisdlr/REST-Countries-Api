import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Loader.scss";

export function Loader() {
  return (
    <div className="Loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

