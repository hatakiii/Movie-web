import Image from "next/image";

export const MovieFooter = () => {
  return (
    <footer
      data-property-1="Dark mode"
      className="w-full py-10 px-20 bg-Indigo-700 inline-flex justify-center items-start gap-12 bg-indigo-700 mt-[51px]"
    >
      <div className="flex-1 max-w-[1280px] flex justify-start items-start gap-28">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-3">
            <div
              data-property-1="Dark Mode"
              className="inline-flex justify-start items-center gap-2"
            >
              <Image src="./film-white.svg" alt="" width={20} height={20} />
              <div className="justify-center text-neutral-50 text-base font-bold  leading-tight tracking-tight">
                Movie Z
              </div>
            </div>
            <div className="justify-start text-neutral-50 text-sm font-normal  leading-tight">
              © 2024 Movie Z. All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-start gap-24">
          <div className="h-48 inline-flex flex-col justify-start items-start gap-3">
            <div className="self-stretch justify-start text-neutral-50 text-sm font-normal  leading-tight">
              Contact Information
            </div>
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="inline-flex justify-start items-center gap-3">
                <Image src="./email.svg" alt="" width={16} height={16} />
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                    Email:
                  </div>
                  <div className="justify-start text-neutral-50 text-sm font-normal  leading-tight">
                    support@movieZ.com
                  </div>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-3">
                <Image src="./phone.svg" alt="" width={16} height={16} />
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                    Phone:
                  </div>
                  <div className="justify-start text-neutral-50 text-sm font-normal  leading-tight">
                    +976 (11) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-3">
            <div className="justify-start text-neutral-50 text-sm font-normal  leading-tight">
              Follow us{" "}
            </div>
            <div className="inline-flex justify-start items-center gap-3">
              <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                Facebook
              </div>
              <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                Instagram
              </div>
              <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                Twitter
              </div>
              <div className="justify-start text-neutral-50 text-sm font-medium  leading-tight">
                Youtube
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
