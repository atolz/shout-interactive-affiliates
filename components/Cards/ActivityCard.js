const ActivityCard = () => {
  return (
    <div className="min-h-[56px] max-h-max rounded-[8px] border-gray-light border flex overflow-hidden cursor-pointer">
      <div className="w-[72px]">
        <img className=" object-cover h-full" src="/images/pepsi-ads.jpg"></img>
      </div>
      <div className="p-[8px]">
        <p className="body_heavy text-black-default">Shout Link created by James McAvoy</p>
        <p className="caption_light">
          Wednesday,
          <span className="caption_heavy ml-2">10:43 am</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
