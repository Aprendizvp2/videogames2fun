import appColors from "../../types/appColors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="px-8 lg:px-32 py-8"
      style={{ backgroundColor: appColors.BACKGROUND_SCREEN_COLOR }}
    >
      <div className="h-[1.5px] my-8" style={{ backgroundColor: appColors.GRAY_07 }} />
      <h1 className="text-white">{`© ${currentYear} VG2F Copyright.`}</h1>
    </div>
  );
}
