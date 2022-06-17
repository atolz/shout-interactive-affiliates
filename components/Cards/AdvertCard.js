import Link from "next/link";

const AdvertCard = ({ reach, engagement, time_left, clicks, link = "" }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow">
      <div className="card_head relative">
        <img src="/images/pepsi-ads.jpg" className="w-full"></img>
        {/* <caption className="body_heavy absolute top-[18px] right-[17px] rounded-full bg-gray-200">Campaign</caption> */}
      </div>

      <div className="card_body shadow-sm p-[16px]">
        <p className="subheader_heavy text-black">Chicken Republic - A New World</p>
        <p className="body_light">Current Reach - {reach}</p>
        <p className="body_light">Engagements - {engagement}</p>
        <p className="body_light">Clicks - {clicks}</p>
        <p className="body_light">Time Left - {time_left}</p>
        <Link href={link}>
          <button className="bg-primary rounded-xl w-[56px] h-[36px] flex items-center justify-center ml-auto md:mt-[16px]">
            <span className="caption_heavy text-white">Edit</span>
          </button>
        </Link>
        {/* Current Reach - 14,301 Engagements - 21.305 Clicks - 398 Time Left - 05d 05h 12m 43s */}
      </div>
    </div>
  );
};

export default AdvertCard;
