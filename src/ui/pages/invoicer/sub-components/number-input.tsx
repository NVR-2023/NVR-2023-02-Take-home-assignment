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
    <div className=" w-full max-w-full bg-zinc-200 px-2 h-4.5 py-0.5 rounded-[2px] items-center justify-start space-x-2">
      <span className="flex space-x-1">
        <motion.button
          {...buttonTapVariants}
          type="button"
          onClick={handleOnDecrease}
          className="w-6 h-4 flex items-center justify-center font-[550] text-sm bg-zinc-400 rounded-[2px] text-zinc-200 focus:outline-none focus:ring-none focus:ring-none">
          -
        </motion.button>
        <motion.button
          {...buttonTapVariants}
          type="button"
          onClick={handleOnIncrease}
          className="w-6 h-4 flex items-center justify-center font-[550] text-sm bg-zinc-400 rounded-[2px] text-zinc-200 focus:outline-none focus:ring-none focus:ring-none">
          +
        </motion.button>
      </span>

      <input
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur} //
        onFocus={handleOnFocus}
        pattern="[0-9]*"
        className="focus:outline-none font-[9px] focus:ring-none h-5 focus:ring-none"
      />
    </div>
  );
};

export default NumberInput;
