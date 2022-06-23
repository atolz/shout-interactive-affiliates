import Link from "next/link";

const LabelOutLinedBtn = ({ text, link = "" }) => {
  return (
    <Link href={link} passHref>
      <button className="border border-[#60646A] w-[auto] my-2 px-4 py-2 rounded-[12px] whitespace-nowrap">
        <span className="body_heavy text-[#60646A]">{text}</span>
      </button>
    </Link>
  );
};

export default LabelOutLinedBtn;