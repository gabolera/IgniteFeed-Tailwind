export function AddNewComment() {
  return (
    <div className="flex flex-col mt-4 [&_button]:hidden [&_button]:focus-within:block">
      <div className="border-b border-b-gray-600 w-full my-4"></div>
      <div className="w-full">
        <h1 className="text-gray-200 font-bold">Deixe seu feedback</h1>
        <textarea
          className="w-full p-4 mt-4 rounded-lg bg-gray-800 text-gray-500 placeholder:text-gray-500 outline outline-0 focus:outline-1 focus:outline-green resize"
          placeholder="Escreva um comentário..."
        ></textarea>
        <div className="">
          <button
            type="submit"
            className=" bg-green text-white font-bold px-5 py-3 rounded-lg mt-4 hover:bg-green-light transition-all"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
