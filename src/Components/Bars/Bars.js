import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavWith from "./NavWith";
import NavWithOut from "./NavWithOut";

export default function Bars() {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? <NavWith/> : <NavWithOut transparent />}
    </div>
  );
}
