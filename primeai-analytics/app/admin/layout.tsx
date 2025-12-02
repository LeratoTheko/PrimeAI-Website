// app/admin/layout.tsx
"use client"; // <-- Add this at the very top

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Admin Sidebar Component
function AdminSidebar() {
    const pathname = usePathname();
    const links = [
        { name: "Dashboard", href: "/admin" },
        { name: "Users", href: "/admin/users" },
        { name: "Settings", href: "/admin/settings" },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col">
            <div className="p-6 text-2xl font-bold">Admin Panel</div>
            <nav className="flex-1">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-6 py-3 hover:bg-gray-700 ${pathname === link.href ? "bg-gray-700" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

// Admin Navbar Component
function AdminNavbar() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Welcome, Admin</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Logout
            </button>
        </header>
    );
}

// Admin Layout
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <main className="p-6 flex-1 overflow-auto bg-gray-100">{children}</main>
            </div>
        </div>
    );
}
