"use client";
// 이 컴포넌트는 interact 하게 동작해야 함 먼저 html 주고 바로 그려! 라고 요청
// 이 뜻은 백엔드에서 렌더하고, 프론트에서 bydrate, interactive하게 동작해야 해~ 라는 뜻

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  const addCountHandler = () => {
    setCount((c) => c + 1);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "👍" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>
          {path === "/about-us" ? "👍" : ""}
        </li>
        <li>
          <button onClick={addCountHandler}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
