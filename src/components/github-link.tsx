import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

const GithubLink = () => {
 return (
  <a
   className={cn(
    buttonVariants({ variant: "ghost", size: "icon" }),
    " rounded-full size-10 border "
   )}
   href="https://github.com/zoldyzdk"
   target="_blank"
  >
   <Github />
  </a>
 );
};

export default GithubLink;
