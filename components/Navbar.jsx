import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-500 p-6">
        <nav>
          <Link href="/"></Link>
          <span>Dalse Blog</span>
          <div>
            <Link href="/post/create">Create</Link>
            <Link href="/profile">My Post</Link>
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
