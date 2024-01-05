"use client";
import Signup from "../forms/signup";
import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="m-1 p-1 d-flex justify-content-center">
      <Head>
        <title>Sign Up for an account</title>
      </Head>
      <div className="w-50">
        <h2 className="text-center">Sign Up</h2>
        <Signup></Signup>
        <div className="m-2 text-center">
          Already have an account?
          <Link href={"/"}>Sign In</Link>
        </div>
      </div>
    </div>
  );
}
