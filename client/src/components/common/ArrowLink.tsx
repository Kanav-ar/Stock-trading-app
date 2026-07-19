import { ChevronRight } from "lucide-react";

type ArrowLinkProps = {
  tag: string;
  link: string;
};

export default function ArrowLink({ tag, link }: ArrowLinkProps) {
  return (
    <a
      href={link}
      className="flex items-center font-semibold text-[#387ed1] hover:text-gray-900  dark:hover:text-white"
    >
      <span>{tag}</span>
      <span className="flex flex-col justify-center"><ChevronRight size={18} /></span>
    </a>
  );
}
