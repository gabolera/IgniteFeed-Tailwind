import { AddNewComment } from "./Comments/AddNewComment";
import { Comment } from "./Comments/Comment";
import { ImageAvatar } from "./forms/ImageAvatar";

export function Post() {
  return (
    <div className="relative bg-gray-700 text-white p-9 rounded-lg mb-4">
      <div className="flex items-center gap-4">
        <ImageAvatar image="https://avatars.githubusercontent.com/u/37487560" />
        <div className="w-full">
          <h1 className="font-bold text-gray-200">Gabriel Andreazza</h1>
          <h3 className="text-sm text-gray-400">UI Designer</h3>
        </div>
        <div className="flex justify-end w-full text-sm text-gray-400">
          Publicado há 1h
        </div>
      </div>
      {/* FIM DO HEADER */}
      <div className="mt-5 text-gray-200 post-content-custom-class">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        mollitia illum laudantium nemo qui et <a href="#">inventore</a>{" "}
        reiciendis iure temporibus assumenda consectetur sed itaque quos libero
        sunt, possimus earum aliquid sint!
        <br />
        <br />
        <a href="#">🤩 Como fica um link</a>
      </div>
      {/* COMENTÁRIOS */}
      <AddNewComment />
      <Comment
        name="Gabriel Andreazza"
        image="https://avatars.githubusercontent.com/u/37487560"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto illo saepe aperiam natus harum debitis amet molestias, sapiente provident rerum maxime quam, aut, libero dolores. Sint ratione deleniti iste."
        isYou={true}
      />
      <Comment
        name="Larissa"
        image="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        comment="Incrível! parabéns 👏👏👏"
        isYou={false}
      />
    </div>
  );
}
