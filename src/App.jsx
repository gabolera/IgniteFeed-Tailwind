import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import { UserSection } from "./components/UserSection";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "Gabriel",
        avatar: "https://github.com/gabolera.png",
        role: "PHP",
      },
      content: 'Olá Mundo',
      createdAt: new Date()
    },
    {
      id: 1,
      author: {
        name: "Willy",
        avatar: "https://github.com/hyrius.png",
        role: "C#",
      },
      content: 'Olá Mundo',
      createdAt: new Date()
    },
  ]);

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto grid grid-cols-12 gap-x-4 mt-8 gap-y-2 lg:gap-y-0">
        <div className="col-span-12 lg:col-span-3 pb-4">
          <UserSection
            name="Gabriel Andreazza"
            office="UI Designer"
            image="https://avatars.githubusercontent.com/u/37487560"
          />
        </div>

        <div className="col-span-12 lg:col-span-9 w-full gap-y-4">
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                createdAt={post.createdAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
