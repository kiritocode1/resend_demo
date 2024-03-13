import { Button } from "@/components/ui/button";
import { sendMail } from "@/lib/mail";
import Image from "next/image";

export default function Home () {
  const send = async () => {
                    
    "use server"
    await sendMail({to:"kathawalearyan9@gmail.com", subject:"Hello world", body:"<div>    <h1>Hello h1</h1>     <h2>Hello h2 </h2>         </div>", name:"Goku"});
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action="">
        <Button formAction={send}>Hello world </Button>
      </form>
    </main>
  );
}
