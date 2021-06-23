import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [size, setSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const router = useRouter();
  const shifted: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    position: "sticky",
    top: "0px",
  };
  const [ham, setHam] = useState(false);
  const resize = (e: UIEvent) => {
    e.preventDefault();
    setSize(window.innerWidth);
    if (window.innerWidth > 800) {
      setHam(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      resize(e);
    });
  }, []);
  const width = () => {
    if (size > 1600) {
      return "14%";
    } else if (size > 1000) {
      return "19%";
    } else {
      return "24%";
    }
  };
  return (
    <div className="total">
      <nav className="nav" style={shifted}>
        <div className="branding">
          <h3>New Solutions Project</h3>
        </div>

        {(() => {
          if (size > 800) {
            return (
              <div className="items">
                <div
                  className="navList"
                  style={{
                    width: width(),
                  }}
                >
                  <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                      Home
                    </a>
                  </Link>

                  <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>
                      About
                    </a>
                  </Link>
                  <Link href="/editions">
                    <a
                      className={
                        router.pathname === "/editions" ? "active" : ""
                      }
                    >
                      Editions
                    </a>
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <div className="items">
                <button
                  onClick={() => {
                    setHam(!ham);
                  }}
                  className="hamburger"
                >
                  <IoReorderThree size={30} />
                </button>
              </div>
            );
          }
        })()}
      </nav>
      {(() => {
        if (ham) {
          return (
            <div className="navbox">
              <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
              </Link>

              <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
              <Link href="/editions">
                <a className={router.pathname === "/editions" ? "active" : ""}>
                  Editions
                </a>
              </Link>
            </div>
          );
        }
      })()}
    </div>
  );
};
