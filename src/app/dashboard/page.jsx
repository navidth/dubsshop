"use client";

import React, { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import HeadrDash from "@/components/DashboardComponent/HeadrDash";
import InformationUser from "@/components/DashboardComponent/InformationUser";
import NavigationDashboard from "@/components/DashboardComponent/NavigationDashboard";
import { useRouter } from "next/navigation";
import { sessions } from "@/utils/isLoginIn";

function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    if (!sessions) {
      router.push("/");
    }
  }, []);
  return (
    <div className="dashboard my-5">
      <div className="headerDash">
        <HeadrDash />
      </div>
      <div className="panelMenu">
        <InformationUser />
        <NavigationDashboard />
      </div>
      <div className="bg-primary aboutItems"> about Items</div>
    </div>
  );
}

export default DashboardPage;
