import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1521129866021-4313ccf20e9e"
        className="absolute inset-0 h-screen w-screen object-cover -z-10"
        alt="background"
        fill={true}
      />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-black bg-opacity-60 backdrop-blur-[6px] mx-5">
          <div className="flex items-center justify-center mb-5">
            <div className="text-[30px] lg:text-[60px] font-akayaKanadaka">
              Narendra
            </div>
            <div className="relative h-[50px] lg:h-[100px] w-[50px] lg:w-[100px]">
              <Image
                unoptimized={true}
                src="/heart.gif"
                alt="Heart"
                fill={true}
              />
            </div>
            <div className="text-[30px] lg:text-[60px] font-akayaKanadaka">
              Aarthi
            </div>
          </div>
          <div className="text-[20px] lg:text-[32px] text-center font-josefinSans w-full lg:w-2/3">
            Website is in progress and will launch soon, please check back later
          </div>
        </div>
      </div>
    </main>
  );
}
