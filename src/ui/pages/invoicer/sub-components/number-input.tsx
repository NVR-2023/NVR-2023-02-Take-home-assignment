import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import { useState, useEffect } from "react";
import { useInvoiceFormContext } from "../../../../custom-hooks/use-invoice-form-context";

const NumberInput = () => {
  const { invoiceFormContext, setInvoiceFormContext } = useInvoiceFormContext();
  const { product } = invoiceFormContext;
  const quantity = product.quantity;

  const [inputValue, setInputValue] = useState(quantity.toString());

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleOnIncrease = () => {
    const newQuantity = quantity + 1;
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: { ...product, quantity: newQuantity },
    });
  };

  const handleOnDecrease = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: { ...product, quantity: newQuantity },
    });
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setInputValue(value);

    const newQuantity = Math.max(1, parseInt(value) || 1);
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: { ...product, quantity: newQuantity },
    });
  };

  const handleOnBlur = () => {
    const newQuantity = Math.max(1, parseInt(inputValue) || 1);
    setInvoiceFormContext({
      ...invoiceFormContext,
      product: { ...product, quantity: newQuantity },
    });
  };

  const handleOnFocus = () => {
    setInputValue("");
  };

  return (
    <div className="w-full grid grid-cols-[1fr_2fr] gap-x-1 h-7">
      <div className="flex items-center justify-start">
        <span className="text-[10px] font-[700] tracking-wide text-zinc-600">QUANTITY</span>
      </div>

      <div className="">
        <div className="flex items-center w-full space-x-1">
          <motion.button
            {...buttonTapVariants}
            type="button"
            onClick={handleOnDecrease}
            className="w-7 h-7 flex items-center justify-center font-[550] text-sm bg-zinc-400 rounded-[2px] text-zinc-200 focus:outline-none focus:ring-none focus:ring-none">
            -
          </motion.button>
          <motion.button
            {...buttonTapVariants}
            type="button"
            onClick={handleOnIncrease}
            className="w-7 h-7 flex items-center justify-center font-[550] text-sm bg-zinc-400 rounded-[2px] text-zinc-200 focus:outline-none focus:ring-none focus:ring-none">
            +
          </motion.button>

          <input
            type="text"
            value={inputValue}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            pattern="[0-9]*"
            className="w-full h-7 text-center bg-zinc-200 rounded-[2px] focus:outline-none font-[9px] text-zinc-600"
          />
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
