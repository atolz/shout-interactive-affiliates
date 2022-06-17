import CircularProgress from "@mui/material/CircularProgress";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/party-management/challenges");
  });
  return (
    <div className="h-screen">
      <div className="mx-auto my-auto grid justify-items-center justify-center w-[100px] h-[100px] mt-[300px]">
        <CircularProgress color="inherit" />
      </div>
    </div>
  );
};

export default Index;
