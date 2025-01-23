import getTextAndBackgroundColorFromString from "../../../../utils/get-text-and-background-color-from-string";

const RequisiteCard = ({
  name,
  value,
  toggleFunction,
  deleteFunction,
}: {
  name: string;
  value?: boolean;
  toggleFunction: () => void;
  deleteFunction: () => void;
}) => {
  const { backgroundColor } = getTextAndBackgroundColorFromString(name);
  return (
    <div className="flex items-center w-full h-7 rounded bg-zinc-200 px-4 items center justify-between">
      <div className="flex items-center">
        <div
          className="h-4 w-4 rounded-[1px] transform -skew-x-12"
          style={{
            backgroundColor: backgroundColor,
          }}></div>
        <span className="ps-4 text-[12px] font-[450]">{name}</span>
        <span>{value ? "y" : "n"}</span>
      </div>
      <div className="space-x-4">
        <button onClick={toggleFunction}>toggle</button>
        <button onClick={deleteFunction}>delete</button>
      </div>
    </div>
  );
};

export default RequisiteCard;
