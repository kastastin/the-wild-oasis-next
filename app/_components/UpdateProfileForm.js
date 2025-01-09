"use client";

import Image from "next/image";

import { updateGuest } from "@/app/_lib/actions";

import SubmitButton from "@/app/_components/SubmitButton";

export default function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalId, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          disabled
          defaultValue={fullName}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          disabled
          defaultValue={email}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <div className="relative size-5">
              <Image
                src={countryFlag}
                alt="Country flag"
                fill
                sizes="50vw"
                className="rounded-sm object-cover"
              />
            </div>
          )}
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalId">National ID number</label>
        <input
          name="nationalId"
          defaultValue={nationalId}
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton label="Update profile" />
      </div>
    </form>
  );
}
