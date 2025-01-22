const OutlinedLabel = ({ label }: { label: string | number }) => {
  
  const convertedLAbel = label.toString()
  return (
    <div className="flex w-10 h-3 text-[9px] items-center justify-center rounded border-[1px] border-zinc-600 text-zinc-600">
      {convertedLAbel.toUpperCase()}
    </div>
  );
};

export default OutlinedLabel;
