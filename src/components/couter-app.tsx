"use client";
import { useUndoRedoState } from "react-undo-redo-state";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function CounterApp() {
  const [count, setCount] = useUndoRedoState(0, {
    onUndo: () => {
      toast.success("Undo successful");
    },
    onRedo: () => {
      toast.success("Redo successful");
    },
  });
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <p className="font-semibold">Cmd/Ctrl + z to undo</p>
        <p className="font-semibold">Cmd/Ctrl + Shift + z to redo</p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-2xl">{count}</p>
        <div className="flex items-center gap-5">
          <Button
            variant={"outline"}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            - Decrement
          </Button>
          <Button variant={"outline"} onClick={() => setCount(count + 1)}>
            + Increment
          </Button>
        </div>
      </div>
    </div>
  );
}
