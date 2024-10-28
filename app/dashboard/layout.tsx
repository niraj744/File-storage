import MobileNav from "@/components/CustomComponents/MobileNav";
import SideNav from "@/components/CustomComponents/SideNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) redirect("/api/auth/login");
  return (
    <>
      <div className="flex">
        <SideNav />
        <MobileNav />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
