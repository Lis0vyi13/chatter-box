type TAvatar = {
  avatar?: string;
  className?: string;
};

const Avatar = ({ avatar, className }: TAvatar) => {
  return (
    <div
      className={`avatar cursor-pointer text-[18px] font-[400] flex overflow-hidden text-center text-white justify-center items-center bg-dark rounded-xl ${className}`}
    >
      {avatar ? <img className="w-full h-full object-cover" src={avatar} alt="USER" /> : "DC"}
    </div>
  );
};

export default Avatar;
