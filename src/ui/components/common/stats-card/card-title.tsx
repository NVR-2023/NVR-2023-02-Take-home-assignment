import getTextAndBackgroundColorFromString from "../../../../utils/get-text-and-background-color-from-string";

const CardTitle = ({ title }: { title: string }) => {
  const { textColor } = getTextAndBackgroundColorFromString(title); // Only use backgroundColor

  return (
    <div
      className="flex items-center justify-center border-[1.5px] px-2 py-1 rounded-sm font-[650] tracking-wide text-sm md:text-xs"
      style={{
        borderColor: textColor,
        color: textColor,
      }}>
      {title.toUpperCase()}
    </div>
  );
};

export default CardTitle;
