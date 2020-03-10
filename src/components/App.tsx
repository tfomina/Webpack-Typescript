import * as React from "react";

interface PageInterface {
  color: string;
}

export const App = (props: PageInterface) => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {props.color}</p>
    </div>
  );
};
