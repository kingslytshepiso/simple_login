"use client";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ValidateSession } from "./api/controller";
import { startTransition, Suspense, useEffect } from "react";
import Loading from "./loading";

export default async function RootLayout({ children }) {
  useEffect(() => {
    // ValidateSession();
  });

  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" href={"/"}>
                <Image
                  src="/logo.svg"
                  width={60}
                  height={60}
                  alt="Picture of the author"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample09"
                aria-controls="navbarsExample09"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href={"/"}
                    >
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Suspense fallback={<Loading />}>
            <div className="container">{children}</div>
          </Suspense>
        </main>
        <footer>
          <div className="container">
            <footer className="py-3 my-4">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
              <p className="text-center text-body-secondary">
                &copy; 2023 Simple Login
              </p>
            </footer>
          </div>
        </footer>
      </body>
    </html>
  );
}
