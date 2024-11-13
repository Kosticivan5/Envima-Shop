const TitleSection = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center pt-12">
      <div className="flex flex-col">
        <h2 className="text-4xl capitalize font-playfair dark:text-greyAccent ">
          {text}
        </h2>
        <div className="inline-block bg-main w-16 h-[2px] rounded-sm"></div>
      </div>
    </div>
  );
};
export default TitleSection;
