"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/dist/server/api-utils";
import reactSessionApi from "react-session-api";

const sessKey = "NSession";

export async function ValidateSession(req, res) {
  var session = reactSessionApi.get(sessKey);
  // if (session) {
  //   if (session.isLogged) {
  //     res.redirect(302, "/");
  //   } else {
  //     res.redirect(302, "/login");
  //   }
  // } else {
  //   var newSession = { sessionId: "--guest-session", isLogged: false };
  //   reactSessionApi.config(true, 36900);
  //   reactSessionApi.set(sessKey, newSession);
  //   res.redirect(302, "/login");
  // }
}
