"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const capacityFilters = [
  { text: "All cabins", filter: "all" },
  { text: "1 - 3 guests", filter: "small" },
  { text: "4 - 7 guests", filter: "medium" },
  { text: "8 - 12 guests", filter: "large" },
];

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${String(params)}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      {capacityFilters.map(({ text, filter }) => (
        <CapacityFilterButton
          key={text}
          text={text}
          filter={filter}
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        />
      ))}
    </div>
  );
}

function CapacityFilterButton({ text, filter, activeFilter, handleFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {text}
    </button>
  );
}
