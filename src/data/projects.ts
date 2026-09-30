export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  contribution: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Technology Solutions Website",
    description: "A modern corporate website for a technology and digital solutions company, designed to showcase its services, expertise, and digital products through a clean and professional user experience.",
    role: "Front-End Development",
    technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "#",
    images: [
      "/projects/merge/fc7687bd-c5d7-413b-8fa9-70ea30401474.png",
      "/projects/merge/e6a4dda9-39ed-409a-ad5b-e1d252efb60f.png",
      "/projects/merge/f711eae0-ef7e-4047-8675-1b10210cfb46.png",
      "/projects/merge/a57f53e0-a60f-44f8-b492-6130fcad3d6c.png",
      "/projects/merge/c3606945-7474-49ee-bc45-0f990f4eb307.png",
      "/projects/merge/4583a87e-afd9-4862-8d90-80c475b9fa16.png",
      "/projects/merge/8dedef7a-d506-4738-a988-30c14eb46bdd.png",
      "/projects/merge/b9a867e8-6210-4067-85fa-095ef7d47689.png",
      "/projects/merge/f0ebb067-300f-4a5d-9416-93996492ff97.png",
    ]
  },
  {
    id: 2,
    title: "Women’s Dress Rental Landing Page",
    description: "A stylish and elegant landing page for a women’s dress rental boutique, designed to showcase the collection and create a smooth, visually appealing browsing experience.",
    role: "Front-End Development",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "https://glam-boutique.vercel.app/",
    images: [
      "/glam/2560cd20-7f24-4a0c-b850-19068a5ea8ec.png",
      "/glam/325bd531-79e6-4cd3-9dd5-4b09885bcc9e.png",
      "/glam/39dd64a7-4d8a-40b4-b657-07c47ab037cf.png",
      "/glam/4957b2e1-e005-4979-8642-cc4478742b1a.png",
      "/glam/62d1556f-e22c-431d-b15b-19bf183a2bc5.png",
      "/glam/73048a90-ee31-4b72-9bb5-ee9248680ab7.png",
      "/glam/8892020b-5d25-45f5-9b7f-842be2b4c514.png",
      "/glam/90c6f467-9a16-4653-83d5-147aa1ff6cee.png",
      "/glam/9b00cfcc-3ee9-4060-92f3-5805a24d9722.png",
      "/glam/b061a98c-86db-4944-a0aa-1077d3c08202.png",
      "/glam/b9530b80-c1fe-469a-bb86-83c6f8604835.png",
      "/glam/d92154c8-4457-440e-94e5-1072a6c4b19b.png",
      "/glam/efc3fcc0-09ec-446c-a631-269ebb5f7ba2.png",
      "/glam/f284a887-6dcd-42a1-9c95-7a45e13357ec.png",
      "/glam/f71bc697-5856-4525-a1d5-e2a5d970a2d9.png"
    ]
  },
  {
    id: 3,
    title: "Real Estate Investment Landing Page",
    description: "A modern landing page for a real estate investment company, designed to showcase investment opportunities, highlight key projects, and build trust through a clean and professional interface.",
    role: "Front-End Development",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "#",
    images: [
      "/s3ss/917f9855-6c30-4c02-8140-81b3b70266db.png",
      "/s3ss/Screenshot_24-9-2026_13586_localhost.jpeg",
      "/s3ss/a388f0e8-5deb-42be-9734-23436e3fc390.png",
      "/s3ss/b5c42f84-2b75-4786-90c1-1b7a95ae672b.png",
      "/s3ss/db1755a5-902e-466b-83a6-3e70d83c6da4.png",
      "/s3ss/f09b2be8-589f-44a9-8bcc-fe4f5d272243.png",
      "/s3ss/feba7cea-d605-4cdd-a27d-ef4e4505bdaa.png"
    ]
  },
  {
    id: 4,
    title: "Government Payments Management System",
    description: "A responsive government payments management system that allows users to process and track expenses through a multi-perspective dashboard, with a mobile-friendly interface for easy access and monitoring.",
    role: "Front-End Development",
    technologies: ["React", "TypeScript", "REST APIs"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "#",
    images: [
      "/gov-payment/05651c36-ef7e-4a06-b40d-7c904ca9e8de.png",
      "/gov-payment/22766215-8734-4532-980a-57e14618d66e.png",
      "/gov-payment/2f0bd072-f593-4dca-b7cc-55173c0e4aa9.png",
      "/gov-payment/331043a2-ce0f-401a-a10c-7083dd595163.png",
      "/gov-payment/4a06024f-5fb4-4914-834e-edf102bb6e5e.png",
      "/gov-payment/4f403ff2-928d-441c-b462-4eb55476e737.png",
      "/gov-payment/5ca8880e-9bb4-4ad4-aa50-9e9e1c0b02a6.png",
      "/gov-payment/63562a68-621a-4e04-8aa3-7824bd4d8e63.png",
      "/gov-payment/66258d05-f986-4db8-9b11-fd96e4086cb7.png",
      "/gov-payment/673844dc-1585-45ff-b1de-2b9b3472cbd8.png",
      "/gov-payment/782dbba0-901a-4eed-bc95-174176ccd784.png",
      "/gov-payment/8e7ab545-4520-4337-bfb8-280d56bfd05b.png",
      "/gov-payment/92df26b3-7183-4b08-8d4b-0725c8b039f6.png",
      "/gov-payment/a077798d-dfc8-43c7-8409-3359e299cc3b.png",
      "/gov-payment/f902424e-1bcf-47a8-b47d-70ca9a5b556d.png",
      "/gov-payment/ff11712f-46ae-4088-addf-0299049fa65b.png"
    ]
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "A comprehensive inventory management system built for a company operating in Egypt’s traffic sector, designed to manage, track, and monitor warehouse operations through an organized and efficient dashboard.",
    role: "Front-End Development",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "#",
    images: [
      "/warehouse/22967067-4311-4448-b4d7-617ebc3c3101.png",
      "/warehouse/3add9668-3a20-45d0-b260-d9130f7af0fe.png",
      "/warehouse/6a284459-b4b6-4fe5-a8ca-f394337ff14b.png",
      "/warehouse/826f1957-4c25-4e7f-859f-676f91643591.png",
      "/warehouse/b31ec842-febb-46ae-adc5-7ffc834f6336.png",
      "/warehouse/bb558108-6b62-4331-821e-1b9d72fbf14b.png"
    ]
  },
  {
    id: 6,
    title: "Automotive Spare Parts Management System",
    description: "A complete spare parts management system for tracking inventory, adding and editing products, managing orders, and monitoring warehouse operations through a comprehensive dashboard. Fully responsive and optimized for mobile devices.",
    role: "Front-End Development",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    contribution: "Interface development, responsive implementation, interaction design, and front-end functionality.",
    category: "React",
    githubUrl: "https://github.com/MohamedBA1",
    liveUrl: "#",
    images: [
      "/مخازن/0cec1dcd-2e2d-4e1e-807d-a4513f07ac30.png",
      "/مخازن/377b4bbd-f75a-4ac2-82a8-e01b025995ab.png",
      "/مخازن/38bdddda-87be-4233-9c0f-b0ffb892f0d5.png",
      "/مخازن/50c7f463-7e72-4b5d-84cd-1aeceab2ee8e.png",
      "/مخازن/6ab76254-9a12-4bae-aa70-01499f3fd6cd.png",
      "/مخازن/83ba4d20-212c-4300-92d7-0be48d6dc0e9.png",
      "/مخازن/93a11a24-3a13-4592-8676-cf762cf7a837.png",
      "/مخازن/b3534d2b-3a1e-413b-986d-d7a71af93129.png",
      "/مخازن/b894dd20-f7b8-4935-aadc-7652a6155dfc.png",
      "/مخازن/e9a005cc-3d41-4990-a310-a7fb4e26fe6f.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-04-44-484Z.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-04-49-370Z.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-04-54-849Z.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-04-58-928Z.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-05-05-847Z.png",
      "/مخازن/localhost-iPhone-17-Pro-Max-2026-09-24T13-05-12-068Z.png"
    ]
  }
];
