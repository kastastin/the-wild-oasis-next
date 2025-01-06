import { getCabin, getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(params.cabinId),
      getBookedDatesByCabinId(params.cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
