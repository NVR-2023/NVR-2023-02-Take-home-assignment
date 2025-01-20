import getTextAndBackgroundColorFromString from "../../../utils/get-text-and-background-color-from-string";

const GeneralLabel = ({ label }: { label: string }) => {
  const { textColor, backgroundColor } = getTextAndBackgroundColorFromString(label);

  return (
    <div
      className="h-4.5 min-w-16 w-16 whitespace-nowrap  px-2 flex items-center justify-center text-sm md:text-[9px] font-[700] rounded-[2px] tracking-wide"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        lineHeight: "18px",
      }}>
      {label.toUpperCase()}
    </div>
  );
};

export default GeneralLabel;
