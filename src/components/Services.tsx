import {BentoGrid, BentoGridItem} from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]" id="services">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Interior Painting",
    description:
      "Revitalize your home's ambiance with our expert interior painting services. We offer meticulous attention to detail, high-quality materials, and a color palette consultation to transform your living spaces beautifully.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exterior Painting",
    description:
      "Enhance your home's curb appeal with our expert exterior painting services. Using premium materials and skilled craftsmanship, we ensure a lasting finish that protects and beautifies your property in any weather.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Faux Finishes",
    description:
      "Transform your home with our Faux Finishes service, offering elegant textures and intricate patterns that mimic materials like marble or wood, adding unique character and sophistication to any room.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Venetian Plaster",
    description:
      "Enhance your home's elegance with our Venetian Plaster service, providing a luxurious finish that complements any space. Our experts in drywall and plastering guarantee a durable, stylish transformation for your interiors.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
