import { v4 as uuidv4 } from "uuid";

const createMocInvoiceUUID = (): string => {
  return uuidv4();
};

export default createMocInvoiceUUID;
