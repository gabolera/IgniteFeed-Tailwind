import { ImageAvatar } from "../forms/ImageAvatar";

export function Comment({ name, image, comment, isYou = false }) {
  return (
    <div className="flex flex-row mt-6">
      <ImageAvatar image={image} border="off" />
      <div className="ml-3 flex-col bg-gray-600 rounded-lg p-4 w-full">
        <div className="flex flex-col w-full ">
          <span className="flex font-bold font-gray-200 text-sm">
            {name}
            {isYou && <span className="text-gray-400 ml-1"> (Você) </span>}
          </span>
          <span className="text-xs text-gray-400 antialiased">
            Cerca de 1hr
          </span>
          <div className="mt-4 text-gray-300">{comment}</div>
        </div>
      </div>
    </div>
  );
}
