import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import { UserSection } from "./components/UserSection";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto grid grid-cols-12 gap-x-4 mt-8">
        <UserSection
          name="Gabriel Andreazza"
          office="UI Designer"
          image="https://avatars.githubusercontent.com/u/37487560"
        />

        <div className="col-span-9 w-full gap-y-4">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
