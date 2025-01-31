"use client";

import Link from "next/link";
import { useAuth } from "@/lib/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  MapIcon,
  LogIn,
  UserPlus,
  LayoutDashboard,
  UserCircle,
  LogOut,
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto  flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-colors hover:text-primary"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <MapIcon className="h-6 w-6 text-primary" />
          </motion.div>
          <TypewriterEffect
            text="AgroData Mapper"
            className="font-bold"
            speed={0.08}
          />
        </Link>
        <motion.div
          className="flex flex-1 items-center justify-end space-x-4"
          variants={navVariants}
        >
          {isAuthenticated ? (
            <>
              <motion.div variants={itemVariants}>
                <Link href="/dashboard">
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    variants={buttonHoverVariants}
                  >
                    <Button
                      variant={
                        pathname === "/dashboard" ? "secondary" : "ghost"
                      }
                      className="space-x-2"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/profile">
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    variants={buttonHoverVariants}
                  >
                    <Button
                      variant={pathname === "/profile" ? "secondary" : "ghost"}
                      className="space-x-2"
                    >
                      <UserCircle className="h-4 w-4" />
                      <span>Profile</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  variants={buttonHoverVariants}
                >
                  <Button
                    onClick={() => logout()}
                    variant="ghost"
                    className="space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div variants={itemVariants}>
                <Link href="/auth/login">
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    variants={buttonHoverVariants}
                  >
                    <Button
                      variant={
                        pathname === "/auth/login" ? "secondary" : "ghost"
                      }
                      className={cn(
                        "space-x-2",
                        pathname === "/auth/login" &&
                          "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Login</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/auth/register">
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    variants={buttonHoverVariants}
                  >
                    <Button
                      variant={
                        pathname === "/auth/register" ? "secondary" : "ghost"
                      }
                      className="space-x-2"
                    >
                      <UserPlus className="h-4 w-4" />
                      <span>Register</span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </>
          )}
          <motion.div variants={itemVariants}>
            <ThemeToggle />
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
