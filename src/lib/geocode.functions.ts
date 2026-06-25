import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const geocodeCity = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z.object({ q: z.string().trim().min(2).max(80) }).parse(data),
  )
  .handler(async ({ data }) => {
    const key = process.env.MAPTILER_KEY;
    if (!key) return { suggestions: [] as string[] };
    const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
      data.q,
    )}.json?key=${key}&autocomplete=true&country=in&limit=5&types=place,locality,neighbourhood,municipality`;
    const res = await fetch(url);
    if (!res.ok) return { suggestions: [] as string[] };
    const json = (await res.json()) as { features?: Array<{ place_name?: string }> };
    const suggestions = (json.features ?? [])
      .map((f) => f.place_name)
      .filter((v): v is string => typeof v === "string");
    return { suggestions };
  });
