import getInitials from "@/utils/getInitials";

type TAvatar = {
  avatar?: string;
  title?: string;
  className?: string;
};

const Avatar = ({ avatar, title, className }: TAvatar) => {
  return (
    <div
      className={`avatar cursor-pointer text-[18px] font-[400] flex overflow-hidden text-center text-white justify-center items-center ${
        avatar ? "" : "bg-dark"
      } rounded-xl ${className}`}
    >
      {avatar ? (
        <img className="w-full bg-cover h-full object-cover" src={avatar} alt="USER" />
      ) : (
        getInitials(title as string)
      )}
    </div>
  );
};

export default Avatar;
