// app/admin/page.tsx
import React from "react";
import Card from "../components/hooks/admin/Card";

export default function AdminHomePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Users" value={120} description="Total registered users" />
                <Card title="Revenue" value="$25,000" description="This month" />
                <Card title="Orders" value={320} description="Pending orders" />
            </div>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                <ul className="space-y-2">
                    <li>User John Doe registered</li>
                    <li>Order #453 processed</li>
                    <li>Settings updated by Admin</li>
                </ul>
            </section>
        </div>
    );
}
