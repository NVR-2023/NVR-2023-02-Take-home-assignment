import CardTitle from "./card-title";
import CloseCardButton from "./close-card-button";
const CardHeaderSegment = ({
  title,
  closeFunction,
}: {
  title: string;
  closeFunction: () => void;
}) => {
  return (
    <div className="flex w-full justify-between items-start mb-5 ">
      <CardTitle title={title} />
      <CloseCardButton closeCardFunction={closeFunction} />
    </div>
  );
};

export default CardHeaderSegment;
