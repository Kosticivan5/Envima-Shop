const EmptyList = ({
  text = "Sorry, no items found",
}: // className,
{
  text?: string;
  // className?: string;
}) => {
  return <h2 className="text-3xl py-2 capitalize">{text}</h2>;
};
export default EmptyList;
