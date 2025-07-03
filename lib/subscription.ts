import { auth } from "@clerk/nextjs/server"

import prismadb from "./prismadb"

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    const userSubcription = await prismadb.userSubscription.findUnique({
        where: {
            userId
        },
        select: {
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true
        }
    });

    if (!userSubcription) {
        return false;
    }

    const { stripePriceId, stripeCurrentPeriodEnd } = userSubcription;

    if (!stripePriceId || !stripeCurrentPeriodEnd) {
        return false;
    }

    const isValid = stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now();

    return !!isValid;
} 