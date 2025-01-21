import { z } from "zod";

export const clientNameSchema = z
  .string()
  .min(2, { message: "At least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Only letters" });

export const streetSchema = z
  .string()
  .min(3, { message: "At least 3 characters" })
  .regex(/^[a-zA-Z0-9\s,.-]+$/, {
    message: "Only letters, numbers",
  });

export const buildingNumberSchema = z
  .string()
  .min(1, { message: "Required" })
  .regex(/^[a-zA-Z0-9]+$/, { message: "Only letters and numbers" });

export const floorSchema = z
  .string()
  .min(1, { message: "Required" })
  .regex(/^[a-zA-Z0-9]+$/, { message: "Only letters and numbers" });

export const citySchema = z
  .string()
  .min(2, { message: "At least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Only letters and spaces" });

export const postalCodeSchema = z
  .string()
  .min(5, { message: "At least 5 characters" })
  .max(10, { message: "At most 10 characters" })
  .regex(/^[a-zA-Z0-9\s-]+$/, {
    message: "Only letters, and numbers",
  });

export const countrySchema = z
  .string()
  .min(2, { message: "At least 2 characters" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Only letters and spaces" });

export const vatNumberSchema = z
  .string()
  .min(5, { message: "At least 5 characters" })
  .max(15, { message: "At most 15 characters" })
  .regex(/^[A-Za-z]{2}[0-9A-Za-z]+$/, {
    message: "Wrong format",
  });

// Schema for Product Name
export const productNameSchema = z.string().min(3, "At least 3 characters.");

// Schema for Product Reference
export const productReferenceSchema = z.string().min(3, "At least 3 characters.");

// Schema for Product Quantity
export const productQuantitySchema = z
  .string()
  .regex(/^\d+$/, "Must be a valid number.")
  .min(1, "Must be at least 1.")
  .transform((val) => parseInt(val, 10)); // Transformation happens after validation

// Schema for Product Unitary Price
export const productUnitaryPriceSchema = z
  .string()
  .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid number")
  .min(1, "Unitary price must be greater than or equal to 1.")
  .transform((val) => parseFloat(val)); // Transformation happens after validation

// Schema for Product Description
export const productDescriptionSchema = z
  .string()
  .min(5, "At least 5 characters.")
  .max(500, "Should not exceed 500 characters.");
