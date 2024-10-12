'use client';
import { cn } from "@/utils/utils";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function Header() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className="w-full z-50">
            <div className="border-b-[1px] flex h-[80px]">
                <div className="max-w-[300px] w-full h-[80px] flex items-center justify-center">
                    ECO
                </div>
                <div className="px-6 flex justify-start w-full space-x-8">
                    <button onClick={() => router.push('/')} className={cn("h-full", pathname === "/" && "border-b-2 border-[#69B578]")}>
                        <p className={cn("p-4 text-base font-medium text-[#181D27] opacity-40", pathname === "/" && "opacity-100")}>Plantas</p>
                    </button>
                    <button onClick={() => router.push('/adubo')} className={cn("h-full", pathname === "/adubo" && "border-b-2 border-[#69B578]")}>
                        <p className={cn("p-4 text-base font-medium text-[#181D27] opacity-40", pathname === "/adubo" && "opacity-100")}>Adubo</p>
                    </button>
                </div>
            </div>
        </div>
    )
}