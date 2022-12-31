import React, { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import Ready from "../ready/Ready";
import '../styles/home.scss'

function Home() {
  const [codeKey, setCodeKey] = useState<string|null>(null);
  useEffect(()=>{
    const codeKeyStart = new URLSearchParams(window.location.search).get('code');
    codeKeyStart && console.log(codeKeyStart);
    setCodeKey(codeKeyStart);
  },[codeKey]);

  return (
    <div>
    {window.location.pathname === '/' && (codeKey ? <Dashboard code={codeKey} /> : <Ready/>)}
    </div>
  )
}

export default Home;