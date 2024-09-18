"use client"

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
interface ISideBaritem {
    name: string;
    icon: LucideIcon;
    path: string;
}
export default function SidebarItem({item} : {item: ISideBaritem}) {
    const {name, icon: Icon, path} = item;

    const router = useRouter();

    const onClick = () => {
        router.push(path);
    }

    return (
        <div className="flex items-center space-x-2 rounded-lg p-3 hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active" onClick={onClick}>
            <div className="flex items-center space-x-2"></div>
            <Icon  size={20}/>

            <p className="text-sm font-semibold">{name}</p>
        </div>
    )
}