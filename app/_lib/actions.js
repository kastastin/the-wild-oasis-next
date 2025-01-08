"use server";

import { revalidatePath } from "next/cache";

import { supabase } from "@/app/_lib/supabase";
import { auth, signIn, signOut } from "@/app/_lib/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) {
    throw new Error("You must be signed in to update your profile.");
  }

  const nationalId = formData.get("nationalId");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
    throw new Error("Please provide a valid national ID number.");
  }

  const updatedData = { nationality, countryFlag, nationalId };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated.");
  }

  revalidatePath("/account/profile");
}
