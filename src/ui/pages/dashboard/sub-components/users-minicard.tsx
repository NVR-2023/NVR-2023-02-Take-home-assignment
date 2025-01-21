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
      <div className="absolute tabular-nums text-zinc-600 p-3 mt-3 space-y-1">
        <div className="text-sm font-[550]">{formattedAverageMonthlyUsers} - Average</div>
      </div>
    </MinicardShell>
  );
};

export default UsersMinicard;
