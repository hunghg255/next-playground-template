"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home-cont">
      <h1>Nextjs Documentation Templates</h1>
      <div className="home-btn">
        <Link href="/quick-start/intro" className="btn-1">
          Quick start
        </Link>
        <Link href="/examples" className="btn-2">
          Examples
        </Link>
        <Link href="/playground" className="btn-3">
          Playground
        </Link>
      </div>
    </div>
  );
}
