import React, { FC } from "react";

const Article: FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>
        {`
          h1 {
            font-size:2rem;
          }
          

        `}
      </style>
      <div style={{ textAlign: "center" }} className="article-lay">
        {children}
      </div>
    </div>
  );
};

export default Article;
