// import Navbar from "@/components/navbar";
// import Sidebar from "@/components/sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";


// const DashboardLayout = async ({
//     children
// }: {
//     children: React.ReactNode;
// }) => {
//     const apiLimitCount = await getApiLimitCount();
//     const isPro = await checkSubscription();
//     return (
//         <div className="h-full relative">
//             <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
//                 <Sidebar 
//                 isPro={isPro}
//                 apiLimitCount={apiLimitCount}
//                 />
//             </div>
//             <main className="md:pl-72">
//                 <Navbar />
//                 {children}
//             </main>
//         </div>
//     )
// }

// export default DashboardLayout;

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ApiLimitOverlay } from "@/components/api-limit-overlay";

async function checkBackendApiLimits(): Promise<boolean> {
    try {
        const showLimitExceeded = process.env.SHOW_API_LIMIT_EXCEEDED === 'true';
        return showLimitExceeded;
        
    } catch (error) {
        console.error('Error checking backend API limits:', error);
        return true;
    }
}

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription();
    const isBackendLimitExceeded = await checkBackendApiLimits();
    
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar 
                    isPro={isPro}
                    apiLimitCount={apiLimitCount}
                />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
            <ApiLimitOverlay isBackendLimitExceeded={isBackendLimitExceeded} />
        </div>
    )
}

export default DashboardLayout;