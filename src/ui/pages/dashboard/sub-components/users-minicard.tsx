import MinicardShell from "../../../components/common/card/minicard-shell";

const UsersMinicard = ({
  color,
  averageNumberOfUsers,
}: {
  color: string;
  averageNumberOfUsers: number;
}) => {
  const formattedAverageMonthlyUsers = Math.floor(averageNumberOfUsers);

  return (
    <MinicardShell title="users" color={color}>
      <div className="flex tabular-nums text-zinc-600 space-y-1">
        <div className="flex text-sm font-[550]">{formattedAverageMonthlyUsers}</div>
      </div>
    </MinicardShell>
  );
};

export default UsersMinicard;
