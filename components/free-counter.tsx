"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

interface FreeCounterProps {
    apiLimitCount: number;
};


export const FreeCounter = ({
    apiLimitCount
}: FreeCounterProps) => {
    const [mounted, SetMounted] = useState(false);

    useEffect(() => {
        SetMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} /  {MAX_FREE_COUNTS} Free Generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                    </div>
                    <Button className="w-full" variant="premium">
                        Upgrade
                        <ElectricBoltIcon className="w-5 h-5 ml-1 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}