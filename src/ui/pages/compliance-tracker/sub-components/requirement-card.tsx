const RequisiteCard = ({
  name,
  toggleFunction,
  deleteFunction,
}: {
  name: string;
  toggleFunction: () => void;
  deleteFunction: () => void;
}) => {
  return (
    <div className="flex w-full h-7 rounded-[2px] bg-zinc-400 px-4 items center justify-between">
      <div>{name}</div>
      <div className="space-x-4">
        <button onClick={toggleFunction}>toggle</button>
        <button onClick={deleteFunction}>delete</button>
      </div>
    </div>
  );
};

export default RequisiteCard;
