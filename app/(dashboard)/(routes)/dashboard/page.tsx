"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageTwoTone, ArrowForwardTwoTone, BrokenImageTwoTone, VideoCameraBackTwoTone, MusicNoteTwoTone, CodeTwoTone } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageTwoTone,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    arrowColor: "text-violet-600",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: BrokenImageTwoTone,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    arrowColor:"text-pink-700",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoCameraBackTwoTone,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    arrowColor:"text-orange-700",
    href: "/conversation"
  },
  {
    label: "Music Generation",
    icon: MusicNoteTwoTone,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    arrowColor: "text-emerald-500",
    href: "/conversation"
  },
  {
    label: "Code Generation",
    icon: CodeTwoTone,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    arrowColor:"text-green-700",
    href: "/conversation"
  },
]


const DashboardPage = () => {

  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of SmartSage
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of SmartSage
        </p>
      </div>
      <div className="px-4 md:px-20 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex justify-between items-center hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-4 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-6 h-6", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowForwardTwoTone className={cn("w-5 h-5",tool.arrowColor)} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;