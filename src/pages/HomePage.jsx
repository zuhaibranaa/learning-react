import React from "react";
import Button from "../components/Button";

function HomePage() {
  return (
    <>
      <p>Welcome To Home Page</p>
      <Button click={(e) => console.log("button clicked")}>Are you Mad</Button>
    </>
  );
}

export default HomePage;
