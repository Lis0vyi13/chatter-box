type TAvatar = {
  avatar?: string;
};

const Avatar = ({ avatar }: TAvatar) => {
  return (
    <div className="avatar cursor-pointer text-[18px] font-[400] flex overflow-hidden text-center text-white justify-center items-center h-[50px] w-[50px] bg-dark rounded-xl">
      {avatar ? <img className="w-full h-full object-cover" src={avatar} alt="USER" /> : "DC"}
    </div>
  );
};

export default Avatar;
