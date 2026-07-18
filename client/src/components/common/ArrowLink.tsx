import { ChevronRight } from "lucide-react";

type ArrowLinkProps = {
  tag: string;
  link: string;
};

export default function ArrowLink({ tag, link }: ArrowLinkProps) {
  return (
    <a
      href={link}
      className="flex items-center gap-2 md:gap-4 md:p-2 font-semibold text-[#387ed1] hover:text-gray-900 dark:hover:text-white"
    >
      <span>{tag}</span>
      <ChevronRight size={18} className="" />
    </a>
  );
}
