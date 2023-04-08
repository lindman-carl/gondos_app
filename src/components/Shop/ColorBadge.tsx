const ColorBadge = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-1">
      <div
        className={`h-6 w-6 rounded-full`}
        style={{
          backgroundColor: primary,
        }}
      ></div>
      <div
        className={`h-6 w-6 rounded-full`}
        style={{
          backgroundColor: secondary,
        }}
      ></div>
    </div>
  );
  // return (
  //   <div
  //     className={`h-8 w-8 rounded-full border-4 drop-shadow`}
  //     style={{
  //       borderColor: secondary,
  //       backgroundColor: primary,
  //     }}
  //   ></div>
  // );
};

export default ColorBadge;
