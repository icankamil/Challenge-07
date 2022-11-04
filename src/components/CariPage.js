import React from "react";
import FormCari from "./FormCari";

function CariPage() {
  const tokenz = window.localStorage.getItem("accessToken");
  console.log(tokenz);
  return <>{tokenz && <FormCari />}</>;
}

export default CariPage;
