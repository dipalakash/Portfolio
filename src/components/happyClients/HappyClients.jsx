import Marquee from "react-fast-marquee";

const brandLogos = [
  {
    name: "CloudSync Solutions",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#7F56D9">
        <path d="M6 19h11a4 4 0 0 0 0-8h-.26A6 6 0 1 0 6 19z" />
      </svg>
    ),
  },

  {
    name: "UrbanHive Media",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF7A59">
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
      </svg>
    ),
  },

  {
    name: "PixelCraft Studios",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#00C48C">
        <rect x="3" y="3" width="6" height="6" />
        <rect x="15" y="3" width="6" height="6" />
        <rect x="3" y="15" width="6" height="6" />
        <rect x="15" y="15" width="6" height="6" />
      </svg>
    ),
  },

  {
    name: "NextGen E-Commerce",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#F4B400">
        <path d="M6 7h12l1 12H5L6 7z" />
        <path d="M9 7a3 3 0 1 1 6 0" />
      </svg>
    ),
  },

  {
    name: "Chatly Technologies",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2">
        <path d="M4 4h16v12H7l-3 3z" />
      </svg>
    ),
  },

  {
    name: "WriteFlow Digital",
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#FB3C7F">
        <path d="M6 2h12v20H6z" />
        <path d="M8 6h8M8 10h8M8 14h5" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to emerging digital brands.
        </p>
      </div>

      {/* FIXED MARQUEE */}
      <Marquee pauseOnHover={true} speed={100} className="mt-6">
        <div className="flex items-center pt-4 md:pt-10">
          {brandLogos.map((item, index) => (
            <div
              key={index}
              className="ps-8 sm:ps-14 md:ps-24 flex flex-col items-center"
            >
              {item.logo}

              <p className="text-gray-700 text-xs sm:text-sm mt-2 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
