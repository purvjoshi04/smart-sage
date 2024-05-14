"use client"

import { Montserrat } from "next/font/google";
import Image from "next/legacy/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Code, ImageIcon, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { DashboardTwoTone, MessageTwoTone, BrokenImageTwoTone, VideoCameraBackTwoTone, MusicNoteTwoTone, CodeTwoTone, SettingsTwoTone } from "@mui/icons-material";
import { usePathname } from "next/navigation";

const montserrat = Montserrat(
    {
        weight: "600",
        subsets: ["latin"]
    })

const routes = [
    {
        label: "Dashboard",
        icon: DashboardTwoTone,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageTwoTone,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: BrokenImageTwoTone,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoCameraBackTwoTone,
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: MusicNoteTwoTone,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: CodeTwoTone,
        href: "/code",
        color: "text-green-700",
    },
    {
        label: "Settings",
        icon: SettingsTwoTone,
        href: "/settings",
    },
]

const Sidebar = () => {

    const pathName = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#13203d] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-12 h-12 mr-4 animate-pulse">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        SmartSage
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathName === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-7 w-7 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;