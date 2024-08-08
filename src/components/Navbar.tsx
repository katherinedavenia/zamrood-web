import Image from "next/image";

const menuItems = [
  {
    id: 1,
    label: "Homepage",
  },
  {
    id: 2,
    label: "Customize Your Trip",
  },
  {
    id: 3,
    label: "Destination",
  },
  {
    id: 4,
    label: "Article",
  },
];

export const Navbar = () => {
  return (
    <div>
      <Image src="/temp.png" alt="title" width={10} height={10} />
      {menuItems.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
      <button>Need Assistance?</button>
    </div>
  );
};
