import { z } from "zod";

export const clientNameSchema = z
  .string()
  .min(2, { message: "Client name must be at least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Client name can only contain letters and spaces" });

export const streetSchema = z
  .string()
  .min(3, { message: "Street name must be at least 3 characters" })
  .regex(/^[a-zA-Z0-9\s,.-]+$/, {
    message: "Street name can only contain letters, numbers, spaces, commas, periods, and hyphens",
  });

export const buildingNumberSchema = z
  .string()
  .min(1, { message: "Building number is required" })
  .regex(/^[a-zA-Z0-9]+$/, { message: "Building number can only contain letters and numbers" });

export const floorSchema = z
  .string()
  .min(1, { message: "Floor is required" })
  .regex(/^[a-zA-Z0-9]+$/, { message: "Floor can only contain letters and numbers" });

export const citySchema = z
  .string()
  .min(2, { message: "City must be at least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "City can only contain letters and spaces" });

export const postalCodeSchema = z
  .string()
  .min(5, { message: "Postal code must be at least 5 characters" })
  .max(10, { message: "Postal code must be at most 10 characters" })
  .regex(/^[a-zA-Z0-9\s-]+$/, {
    message: "Postal code can only contain letters, numbers, spaces, and hyphens",
  });

export const countrySchema = z
  .string()
  .min(2, { message: "Country name must be at least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Country can only contain letters and spaces" });

export const vatNumberSchema = z
  .string()
  .min(5, { message: "VAT number must be at least 5 characters" })
  .max(15, { message: "VAT number must be at most 15 characters" })
  .regex(/^[A-Za-z]{2}[0-9A-Za-z]+$/, {
    message: "VAT number must start with the country code followed by alphanumeric characters",
  });
