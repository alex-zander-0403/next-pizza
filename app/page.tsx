import { Button } from "@/components/ui/button";

//
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-zinc-700">
        <h1 className="font-nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <Button variant="default">shadcn default</Button>
        <Button variant="outline">shadcn outline</Button>
      </div>
    </>
  );
}
