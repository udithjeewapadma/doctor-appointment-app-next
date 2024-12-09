import { Button } from "@/components/ui/button";
import Image from "next/image";
import Doctor from "./_components/Doctor";
import SearchCategory from "./_components/SearchCategory";

export default function Home() {
  return (
    <div>
      <Doctor />

      {/* search bar and categories */}
      <SearchCategory />
    </div>
  );
}
