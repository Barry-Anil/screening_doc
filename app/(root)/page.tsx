
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="flex flex-col px-7">
      <h1 className="text-6xl font-semibold my-4">Screening Doc</h1>
      <Button className="w-fit">Coming Soon...</Button>
    </main>
  );
}
