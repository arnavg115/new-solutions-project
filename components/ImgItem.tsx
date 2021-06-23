import React from "react";
import Image from "next/image";
import image from "../public/me.jpeg";
interface props {
  src: string;
  legend: string;
}

export const ImgItem = (props: props) => {
  return (
    <div>
      <Image src={image} alt="other" />
      <p className="legend">{props.legend}</p>
    </div>
  );
};
