import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { FolderOpen, PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import UserMenu from "./user-menu";

async function Header() {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          
  <Image 
  src="/Logo.png"
  alt="Reflect Logo"
  width={300}   // bigger base width
  height={300}  // bigger base height
  className="h-20 w-auto object-contain" // h-20 = 80px tall
/>
        </Link>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard#collections">
              <Button variant="outline" className="flex items-center gap-2">
                <FolderOpen size={18} />
                <span className="hidden md:inline">Collections</span>
              </Button>
            </Link>
          </SignedIn>
          <Link href="/journal/write">
            <Button variant="journal" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Write New</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
 

