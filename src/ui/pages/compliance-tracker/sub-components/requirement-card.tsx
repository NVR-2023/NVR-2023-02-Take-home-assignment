const RequirementCard = ({
  name,
  toggleFunction,
  deleteFunction,
}: {
  name: string;
  toggleFunction: () => void;
  deleteFunction: () => void;
}) => {
  return (
    <div>
      <span>{name}</span>
      <button onClick={toggleFunction}>toggle</button>
      <button onClick={deleteFunction}>delete</button>
    </div>
  );
};

export default RequirementCard;
