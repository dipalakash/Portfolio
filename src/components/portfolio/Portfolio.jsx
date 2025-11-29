// import Projects from "./Projects";
// import card1 from "../../assets/images/portfolio-images/card-1.png";
// import card2 from "../../assets/images/portfolio-images/card-2.png";
// import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

// const projectData = [
//   {
//     id: 1,
//     image: card1,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
//     link: "#!",
//   },
//   {
//     id: 2,
//     image: card2,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
//     link: "#!",
//   },
//   {
//     id: 3,
//     image: card3,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
//     link: "#!",
//   },
//   {
//     id: 4,
//     image: card4,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
//     link: "#!",
//   },
//   {
//     id: 5,
//     image: card5,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
//     link: "#!",
//   },
//   {
//     id: 6,
//     image: card6,
//     category: "UI-UX DESIGN",
//     title: "Product Admin Dashboard",
//     description:
//       "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
//     link: "#!",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div
//       className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
//       id="portfolio"
//     >
//       <div className="xl:mb-17.5 mb-5">
//         <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
//           <p className="section-title ">Portfolio</p>
//           <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
//             Here's a selection of my recent work, showcasing my skills in
//             creating user-centric and visually appealing interfaces.
//           </p>
//         </div>
//       </div>
//       <div className="mx-auto flex justify-center">
//         <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
//           {projectData.map((data, index) => (
//             <Projects data={data} key={index} />
//           ))}
//         </div>
//       </div>
//       <div className="text-center">
//         <a
//           href="#!"
//           className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
//         >
//           More Project
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import Projects from "./Projects";
// import card1 from "../../assets/images/portfolio-images/card-1.png";
import card1 from "../../assets/images/portfolio-images/card1_new.jpg";

import card2 from "../../assets/images/portfolio-images/card2_new.webp";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card5_new.png";
import card6 from "../../assets/images/portfolio-images/card6_new.jpg";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Next.js / MERN STACK",
    title: "E-commerce Platform",
    description:
      "A modern Next.js-powered e-commerce platform featuring product listings, secure checkout, user accounts, cart management, admin CMS, and API integration — optimized for speed and scalability.",
    link: "https://github.com/dipalakash/E-commerceNextJs.git",
  },

  {
    id: 2,
    image: card2,
    category: "FULL STACK",
    title: "Facebook Clone (MERN)",
    description:
      "A complete social media clone including posts, likes, comments, profile updates, real-time chat, and image uploads.",
    link: "https://github.com/dipalakash/FaceBook_Clone_.git",
  },
  {
    id: 3,
    image: card3,
    category: "Frontend (HTML • CSS • JavaScript)",
    title: "",
    description:
      "A clean and responsive personal portfolio built using HTML, CSS, and JavaScript. It includes smooth animations, project showcases, a modern UI layout, and a contact section — designed to highlight skills and personal branding effectively.",
    link: "https://github.com/dipalakash/Portfolio.git",
  },

  {
    id: 4,
    image: card4,
    category: "MERN BLOG",
    title: "Blog & Content Platform",
    description:
      "A SEO-friendly blog system with authentication, rich text editor, categories, comments, and admin controls.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "ADMIN DASHBOARD",
    title: "Admin Dashboard (React + Node)",
    description:
      "A data-driven admin dashboard with analytics, charts, role-based access, and API integration for managing system data.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "REAL-TIME APP",
    title: "Chat Application (MERN + Socket.IO)",
    description:
      "A real-time chat app with sockets, typing indicators, online/offline status, group chat, and message notifications.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A collection of my MERN and Next.js projects showcasing real-world
            full-stack development, scalable architecture, and modern UI
            engineering.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
