// import Roles from "./Roles";

// const rolesData = [
//   {
//     id: 1,
//     title: "User Experience (UX)",
//     description:
//       "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
//   },
//   {
//     id: 2,
//     title: "User Interface (UI)",
//     description:
//       "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
//   },
//   {
//     id: 3,
//     title: "Web Development",
//     description:
//       "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
//   },
// ];

// const Profession = () => {
//   return (
//     <div
//       className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
//       id="services"
//     >
//       <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
//         <p className="section-title max-md:text-center">What I do?</p>
//         <div className="mt-6 text-[14px]">
//           <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
//             I specialize in designing user experiences, crafting engaging
//             interfaces, and building robust web applications that deliver value
//             and usability.
//           </p>
//           <p className="text-xs sm:text-lg font-normal text-gray-400">
//             My approach combines creativity and technical expertise to deliver
//             solutions that are both visually appealing and highly functional for
//             users.
//           </p>
//         </div>
//         <a
//           href="#!"
//           className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
//         >
//           Say Hello!
//         </a>
//       </div>
//       <div className="">
//         {rolesData.map((role, index) => (
//           <Roles role={role} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Profession;

import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development (Node + Express)",
    description:
      "I build secure, scalable, and high-performance REST APIs using Node.js and Express. From authentication (JWT, OAuth) to complex business logic and database architecture, I ensure backend systems are optimized and production-ready.",
  },
  {
    id: 2,
    title: "Frontend Development (React / Next.js)",
    description:
      "I create clean, responsive, and interactive interfaces with React and Next.js. I focus on component-driven architecture, state management (Context, Redux), API integration, and delivering seamless user experiences.",
  },
  {
    id: 3,
    title: "Database & Full-Stack Integration",
    description:
      "I work extensively with MongoDB and Mongoose to design efficient schemas, optimize queries, and integrate the full MERN stack smoothly — ensuring fast performance, data reliability, and real-world scalability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building full-stack web applications using the MERN
            stack — from backend APIs and databases to frontend interfaces and
            seamless user experiences.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My workflow blends clean code, modern UI design, and scalable
            infrastructure to deliver secure, fast, and user-friendly
            applications for real-world use.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

