const CardTitle = ({ title, textColor }: { title: string; textColor: string }) => {
  return (
    <div
      className="flex items-center justify-center border-2 px-2 py-1 rounded-sm font-[650] tracking-wide text-sm md:text-xs"
      style={{
        borderColor: textColor,
        color: textColor,
      }}>
      {title.toUpperCase()}
    </div>
  );
};

export default CardTitle;
