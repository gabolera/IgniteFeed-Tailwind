import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Comment } from "./Comment";
import { ImageAvatar } from "./forms/ImageAvatar";

export function Post({ author, content, createdAt }) {
  const publishedAtFormatted = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      author: {
        name: "Gabolera",
        avatar: "https://github.com/gabolera.png",
      },
      comment: "Meu primeiro comentário",
      createdAt: new Date(),
    },
    {
      author: {
        name: "Hyrius",
        avatar: "https://github.com/hyrius.png",
      },
      comment: "Meu segundo comentário",
      createdAt: new Date(),
    },
  ]);

  function handleNewCommentChangeText() {
    setNewCommentText(event.target.value);
  }

  function handlePublishNewComment() {
    event.preventDefault();
    setComments([
      ...comments,
      {
        author: {
          name: "Gabolera",
          avatar: "https://github.com/gabolera.png",
        },
        comment: newCommentText,
        createdAt: new Date(),
      },
    ]);
    setNewCommentText("");
  }

  return (
    <div className="relative bg-gray-700 text-white p-9 rounded-lg mb-4">
      <div className="flex items-center gap-4">
        <ImageAvatar image={author.avatar} />
        <div className="w-full">
          <h1 className="font-bold text-gray-200">{author.name}</h1>
          <h3 className="text-sm text-gray-400">{author.role}</h3>
        </div>
        <div className="flex justify-end w-full text-sm text-gray-400">
          {publishedAtFormatted}
        </div>
      </div>
      {/* FIM DO HEADER */}

      {/* INICIO DO POST */}
      <div className="mt-5 text-gray-200 post-content-custom-class">
        {content}
      </div>
      {/* FIM DO POST */}

      <form
        onSubmit={handlePublishNewComment}
        className="flex flex-col mt-4 [&_button]:hidden [&_button]:focus-within:block"
      >
        <div className="border-b border-b-gray-600 w-full my-4"></div>
        <div className="w-full">
          <h1 className="text-gray-200 font-bold">Deixe seu feedback</h1>
          <textarea
            className="w-full p-4 mt-4 rounded-lg bg-gray-800 text-gray-500 placeholder:text-gray-500 outline outline-0 focus:outline-1 focus:outline-green resize"
            placeholder="Escreva um comentário..."
            value={newCommentText}
            onChange={handleNewCommentChangeText}
          />
          <div className="">
            <button
              type="submit"
              className=" bg-green text-white font-bold px-5 py-3 rounded-lg mt-4 hover:bg-green-light transition-all"
            >
              Publicar
            </button>
          </div>
        </div>
      </form>

      {/* COMENTÁRIOS */}
      {comments.map((comment) => {
        return (
          <Comment
            name={comment.author.name}
            image={comment.author.avatar}
            comment={comment.comment}
            createdAt={comment.createdAt}
            //   isYou={true}
          />
        );
      })}
    </div>
  );
}
