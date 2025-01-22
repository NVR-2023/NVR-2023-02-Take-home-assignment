const CategoryCard = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{percentage}</span>
    </div>
  );
};

export default CategoryCard;
