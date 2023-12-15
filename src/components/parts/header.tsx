import { PenIcon } from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-2">
      <div className="flex flew-row gap-3 text-2xl font-light">
        <PenIcon />
        Markdown Editor
      </div>
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarImage />
        <AvatarFallback>CQ</AvatarFallback>
      </Avatar>
    </div>
  );
}
