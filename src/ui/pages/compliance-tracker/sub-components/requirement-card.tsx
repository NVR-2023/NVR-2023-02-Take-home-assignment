import getTextAndBackgroundColorFromString from "../../../../utils/get-text-and-background-color-from-string";
import CheckedTasksIcon from "../../../components/icons/checked-tasks-icon";
import UncheckedTasksIcon from "../../../components/icons/uncchecked-tasks-icon";
import CloseIcon from "../../../components/icons/close-icon";

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
        <span className="text-zinc-700 ps-4 text-[12px] font-[450]">{name}</span>
      </div>
      <div className="space-x-4">
        <button
          onClick={toggleFunction}
          className={`${value ? "text-green-700" : "text-red-500"} transform translate-y-1 `}>
          {value ? <CheckedTasksIcon scale={0.75} /> : <UncheckedTasksIcon scale={0.75} />}
        </button>
        <button onClick={deleteFunction} className="text-zinc-700 transform translate-y-1">
          <CloseIcon scale={0.75} />
        </button>
      </div>
    </div>
  );
};

export default RequisiteCard;
