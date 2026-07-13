"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  role: "admin" | "user";
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      setUser(data.user);
    }

    loadUser();
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
    router.push("/login");
    router.refresh();
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          it2_Suphawat
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}></button>
          ☰
        </button>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>

          <li>
            <Link href="/about">เกี่ยวกับเรา</Link>
          </li>

          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link href="/profile">Profile</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>

          <li>
            <Link href="/register">Register</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}