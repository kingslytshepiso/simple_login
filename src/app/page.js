"use client";

import Link from "next/link";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { ValidateSession } from "./api/controller";

export default function Home() {
  const router = useRouter();
  startTransition(() => {
    // ValidateSession();
  });
  return (
    <div className="m-2 d-flex justify-content-center">
      <div className="m-1">
        <Link href={"/logout"} className="btn-danger">
          Logout
        </Link>
      </div>
    </div>
  );
}
