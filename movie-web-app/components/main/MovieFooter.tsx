import Image from "next/image";

export const MovieFooter = () => {
  return (
    <>
      <footer
        data-property-1="Dark mode"
        className="w-full py-10 px-20 bg-Indigo-700 md:flex hidden justify-center items-start gap-12 bg-indigo-700 mt-[51px]"
      >
        <div className="flex-1 md:max-w-[1280px] flex flex-row justify-between items-start gap-28">
          {/* Movie Z */}
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
          {/* Contact infor + Follow us */}
          <div>
            <div className="flex justify-end items-start gap-24">
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
                <div className="flex flex-wrap gap-3 ">
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
        </div>
      </footer>
      <footer className="w-full py-10 px-6 bg-indigo-700 mt-[51px] flex md:hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-between gap-8">
          {/* Movie Z */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/film-white.svg" alt="" width={20} height={20} />
              <span className="text-neutral-50 text-base font-bold">
                Movie Z
              </span>
            </div>
            <span className="text-neutral-50 text-sm">
              © 2024 Movie Z. All Rights Reserved.
            </span>
          </div>

          {/* Contact + Follow */}
          <div className="flex flex-row gap-6 justify-between">
            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <span className="text-neutral-50 text-sm">
                Contact Information
              </span>
              <div className="flex gap-3">
                <Image src="/email.svg" alt="" width={16} height={16} />
                <div>
                  <p className="text-neutral-50 text-sm font-medium">Email:</p>
                  <p className="text-neutral-50 text-sm">support@movieZ.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Image src="/phone.svg" alt="" width={16} height={16} />
                <div>
                  <p className="text-neutral-50 text-sm font-medium">Phone:</p>
                  <p className="text-neutral-50 text-sm">+976 (11) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <span className="text-neutral-50 text-sm">Follow us</span>
              <div className="flex flex-col gap-2">
                <span className="text-neutral-50 text-sm font-medium">
                  Facebook
                </span>
                <span className="text-neutral-50 text-sm font-medium">
                  Instagram
                </span>
                <span className="text-neutral-50 text-sm font-medium">
                  Twitter
                </span>
                <span className="text-neutral-50 text-sm font-medium">
                  Youtube
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
