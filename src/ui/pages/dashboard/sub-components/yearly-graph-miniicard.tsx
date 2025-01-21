import MinicardShell from "../../../components/common/card/minicard-shell";

const YearlyCardMiniGraph = ({ color }: { color: string }) => {
  return (
    <MinicardShell title="Yearly" color={color}>
      <div className="w-full h-full"></div>
    </MinicardShell>
  );
};

export default YearlyCardMiniGraph;
