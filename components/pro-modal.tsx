"use client";

import axios from "axios";
import { useState } from "react";
import { MessageTwoTone, BrokenImageTwoTone, VideoCameraBackTwoTone, MusicNoteTwoTone, CodeTwoTone, ElectricBolt } from "@mui/icons-material";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProModel } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
const tools = [
    {
        label: "Conversation",
        icon: MessageTwoTone,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        arrowColor: "text-violet-600",
    },
    {
        label: "Image Generation",
        icon: BrokenImageTwoTone,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        arrowColor: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoCameraBackTwoTone,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        arrowColor: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: MusicNoteTwoTone,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        arrowColor: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: CodeTwoTone,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        arrowColor: "text-green-700",
    },
]

export const ProModal = () => {
    const proModal = useProModel();
    const [loading, setLoading] = useState(false)

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Something went wrong");
        }finally{
            setLoading(false);
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex jutify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1 ">
                            Upgrade to SmartSage
                            <Badge className="uppercase text-sm py-1" variant="premium">
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <CheckIcon className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        disabled={loading}
                        onClick={onSubscribe}
                        size="lg"
                        variant="premium"
                        className="w-full"
                    >
                        Upgrade
                        <ElectricBolt className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}