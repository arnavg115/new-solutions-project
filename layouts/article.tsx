import React, { FC } from "react";

const Article: FC = ({ children }) => {
  return <div style={{ textAlign: "center" }}>{children}</div>;
};

export default Article;
