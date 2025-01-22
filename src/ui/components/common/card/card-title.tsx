import ToolStripLabel from "../tool-strip-label";
const CardTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-start  text-zinc-400 justify-start rounded-sm font-[700] tracking-wide text-sm md:text-xs">
      <ToolStripLabel label={title} />
    </div>
  );
};

export default CardTitle;
