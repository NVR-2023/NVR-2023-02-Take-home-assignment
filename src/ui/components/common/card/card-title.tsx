const CardTitle = ({ title }: { title: string; textColor: string }) => {
  return (
    <div className="flex items-center  text-zinc-400 justify-center px-2 py-1 rounded-sm font-[700] tracking-wide text-sm md:text-xs">
      {title.toUpperCase()}
    </div>
  );
};

export default CardTitle;
