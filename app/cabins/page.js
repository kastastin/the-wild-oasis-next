import { Suspense } from "react";

import Filter from "@/app/_components/Filter";
import Spinner from "@/app/_components/Spinner";
import CabinList from "@/app/_components/CabinList";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>

      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="mb-8 flex justify-center">
        <Filter />
      </div>

      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </>
  );
}
