"use client"

import {
    LayoutDashboard,
    BadgeDollarSign, 
    WalletCards,
    LucideIcon
} from "lucide-react"
import SidebarItem from "./item";

interface ISideBaritem {
    name: string;
    icon: LucideIcon;
    path: string;
}
const items: ISideBaritem [] = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard
    }, 
    {
        name: "Portfolio", 
        path: "/portfolio",
        icon: BadgeDollarSign
    }, 
    {
        name: "Budgets", 
        path: "/budgets", 
        icon: WalletCards
    }
]

export default function Sidebar() {
    return <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl p-4">
        <div className="flex flex-col space-y-10 w-full">
            <img className='h-10 w-fit' src='/next.svg' alt='logo' />
                <div className="flex flex-col space-y-2 p-3">

                    {items.map(item => (
                    <SidebarItem key={item.path} item={item} />
                ))}
                </div>
        </div>
    </div>
}