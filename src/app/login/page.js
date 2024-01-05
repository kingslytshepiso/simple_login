"use client";

import Image from "next/image";
import { SubmitLogin } from "../data";
import Head from "next/head";
import { startTransition, useEffect, useTransition } from "react";
import { useState } from "react";
import LoginForm from "../forms/login";
import Link from "next/link";
import { ValidateSession } from "../api/controller";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    const sess = ValidateSession();
    if (sess.isLogged) {
      router.push("/");
    }
  });
  return (
    <div className="m-1 p-1 d-flex justify-content-center">
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-50">
        <h2 className="text-center">Login</h2>
        <LoginForm></LoginForm>
        <div className="m-2 text-center">
          Dont have account?
          <Link href={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
