import CardTitle from "./card-title";
import CloseCardButton from "./close-card-button";
const CardHeaderSegment = ({
  title,
  closeFunction,
  textColor,
}: {
  title: string;
  closeFunction: () => void;
  textColor: string;
}) => {
  return (
    <div className="flex w-full justify-between">
      <CardTitle title={title} textColor={textColor} />
      <CloseCardButton closeCardFunction={closeFunction} />
    </div>
  );
};

export default CardHeaderSegment;
