import ToolStripLabel from "../tool-strip-label";
const CardTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex transform -translate-y-2 items-center  text-zinc-400 justify-center py-1 rounded-sm font-[700] tracking-wide text-sm md:text-xs">
      <ToolStripLabel label={title} />
    </div>
  );
};

export default CardTitle;
