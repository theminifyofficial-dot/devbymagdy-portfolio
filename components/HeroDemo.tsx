import PhoneDemo from "./PhoneDemo";

export default function HeroDemo() {
  return (
    <div className="lg:ml-auto lg:max-w-[280px]">
      <PhoneDemo
        src="/work/yassys-demo.mp4"
        poster="/work/yassys-poster.jpg"
        caption="YASSYS, live at yassyseg.com"
        align="start"
      />
    </div>
  );
}
