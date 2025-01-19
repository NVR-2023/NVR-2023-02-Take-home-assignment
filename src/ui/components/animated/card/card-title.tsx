const CardTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center border-[1.5px] px-2 py-1 rounded-sm border-[#5d5dff] font-[650] tracking-wide text-[#5d5dff] text-sm md:text-xs">
      {title.toUpperCase()}
    </div>
  );
};

export default CardTitle;
