"use client";
import { BackIcon } from "../../assets/icons";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface ButtonBackProps {
  title: string;
}

const ButtonBack: React.FC<ButtonBackProps> = ({ title }) => {
  const { toast } = useToast();
  const handleClick = () => {
    if (title === "This button does nothing...") {
      toast({
        title: "I told you...",
        description: "...this button does nothing!",
        action: <ToastAction altText="fine!">Ok</ToastAction>,
      });
    }
  };

  return (
    <div className="flex flex-row justify-center items-center mt-8 gap-12 w-full mb-8">
      <button
        onClick={handleClick}
        className="flex justify-center items-center gap-2 text-black text-lg bg-transparent border-none outline-none cursor-pointer"
      >
        <BackIcon />
        Back
      </button>
      <button
        style={{ backgroundColor: "#0000ffff" }}
        onClick={handleClick}
        className="flex justify-center items-center w-full text-white border-none outline-none cursor-pointer rounded-md text-lg py-2"
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonBack;
