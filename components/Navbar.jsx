import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-sm py-3 dark:text-black">
        <nav className="flex items-center max-w-7xl mx-auto justify-between">
          <Link href="/">
            <span className="font-bold text-xl text-blue-500">Dalse</span>
            <span className="text-primary font-bold dark:text-black">Blog</span>
          </Link>

          <div className="flex item-center gap-5 text-sm">
            <Link
              href="/post/create"
              className="font-medium hover:text-blue-500"
            >
              Create
            </Link>
            <Link href="/profile" className="font-medium hover:text-blue-500">
              My Post
            </Link>
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
