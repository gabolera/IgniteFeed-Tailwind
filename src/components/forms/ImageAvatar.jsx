export function ImageAvatar({image, border = "on"}) {
  return (
    <img
      src={image}
      className={`rounded-lg h-[60px] w-[60px] object-cover object-center
      ${border == "on" ? "border-4 border-gray-600 outline outline-2 outline-green-light" : ""}`} 
    />
  );
}
