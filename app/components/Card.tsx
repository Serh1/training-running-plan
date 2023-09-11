import React from "react";

interface RaceCardProps {
  data: string;
  onClick: (data: any) => void;
  selected: boolean;
}

const Card = ({ onClick, data, selected }: RaceCardProps) => {
  const cardClass = selected ? "bg-blue-500 text-white" : "bg-white text-black";

  function handleClick() {
    onClick(data);
  }

  return (
    <div
      className={`flex items-center justify-center
        p-px m-2 w-20 h-20 rounded-2xl
        text-4xl shadow font-bold
        cursor-pointer  hover:scale-110 ${cardClass}`}
      onClick={handleClick}
    >
      {data}
    </div>
  );
};

export default Card;
