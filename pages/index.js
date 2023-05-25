import React from "react";
import AuthLayout from "@/layout/AuthLayout";

const Home = () => {
  return <>Login</>;
};

Home.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Home;
