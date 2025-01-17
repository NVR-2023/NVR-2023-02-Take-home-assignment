import { ComponentArrayType } from "../../../types/global-types";

const ToolStrip = ({ tools }: { tools: ComponentArrayType }) => {
  return (
    <ul className="bg-zinc-700 flex rounded">
      {tools.map((Toggle, index) => (
        <li key={index}>
          <Toggle />
        </li>
      ))}
    </ul>
  );
};

export default ToolStrip;
