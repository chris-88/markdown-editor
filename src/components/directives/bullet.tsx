import { RightChevronIcon, CheckIcon } from "@/assets/icons";

interface BulletProps {
  children: string;
}

const Bullet: React.FC<BulletProps> = ({ children }) => {
  return (
    <div className="flex flex-row gap-6 my-2">
      <div className=" h-2 w-2">
        <CheckIcon />
      </div>
      {children}
    </div>
  );
};

export default Bullet;
