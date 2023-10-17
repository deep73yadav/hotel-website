import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path }) => {  
  const paths = path.split("/").filter((item) => item);

  return (
    <div aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li
              key={path}
              className={`breadcrumb-item${isLast ? " active" : ""}`}
              aria-current={isLast ? "page" : null}
            >
              {isLast ? path : <Link to={routeTo}>{path}</Link>}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
