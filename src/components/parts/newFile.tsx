import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewIcon } from "../../assets/icons";

export default function NewFile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant="ghost">
          <NewIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new file</DialogTitle>
          <DialogDescription>
            Give the file a name, then click save.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              File Name
            </Label>
            <Input id="name" defaultValue="Untitled" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save file</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
