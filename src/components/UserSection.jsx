import { ImageAvatar } from "./forms/ImageAvatar";
import { IoBrushOutline } from "react-icons/io5";

export function UserSection({ name, office, image }) {
  return (
    <div className="relative col-span-3 bg-gray-700 w-full pb-5 rounded-lg text-white max-h-[270px]">
      <div
        className="flex w-full h-16 bg-center bg-cover rounded-t-lg justify-center p-8"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/20787/pexels-photo.jpg')`,
        }}
      >
        <ImageAvatar image={image} />
      </div>
      <div className="flex flex-col justify-center mt-12">
        <h1 className="flex text-base font-bold justify-center text-gray-200">
          {name}
        </h1>
        <h3 className="flex text-sm justify-center text-gray-400">
          {office}
        </h3>
        <div className="border-b border-gray-600 mt-5 mb-5"></div>
        <div className="px-8">
          <button className="border border-green rounded-lg text-green font-bold w-full h-12 hover:text-white hover:bg-green transition-all cursor-pointer">
            <div className="flex justify-center items-center gap-2">
              <IoBrushOutline /> Editar seu perfil
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
