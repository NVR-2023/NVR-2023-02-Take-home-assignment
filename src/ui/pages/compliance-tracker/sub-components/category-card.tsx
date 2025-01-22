import ToolStripLabel from "../../../components/common/tool-strip-label";
const CategoryCard = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="flex w-full h-7 rounded-[2px] bg-zinc-500 px-4 items center justify-between">
      <span className="flex items-center text-zinc-200 text-[10px] font-[550] tracking-wide">
        <ToolStripLabel label={name} />
      </span>
      <span className="">{percentage}</span>
    </div>
  );
};

export default CategoryCard;
