import { z } from "zod";

export const clientNameSchema = z.string().min(1, { message: "Client name is required" });

export const streetSchema = z.string().min(1, { message: "Street is required" });

export const buildingNumberSchema = z.string().min(1, { message: "Building number is required" });

export const floorSchema = z.string().min(1, { message: "Floor is required" });

export const citySchema = z.string().min(1, { message: "City is required" });

export const postalCodeSchema = z.string().min(1, { message: "Postal code is required" });

export const countrySchema = z.string().min(1, { message: "Country is required" });

export const vatNumberSchema = z.string().min(1, { message: "VAT number is required" });
