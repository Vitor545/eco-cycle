'use client';
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";

type CardProps = {
    name: string
    description: string
    recommendation: {
        name: string
        color: string
        description: string
    };
    difficulty: {
        level: string
        color: string
    }
    image: string
    tip: string
}

export default function Card(item: CardProps) {
    const [itemState, setStateItem] = useState(item)

    useEffect(() => {
        setStateItem(item)
    }, [item])

    const {
        name,
        description,
        recommendation,
        tip,
        image,
        difficulty
    } = itemState

    return (
        <Sheet>
            <SheetTrigger>
                <div className="max-w-[350px] w-full border-[1px] rounded-md hover:cursor-pointer">
                    <Image width={350} height={173} className="object-cover w-[350px] h-[173px] rounded-md" alt="cenoura" src={image} />
                    <div className="p-4 flex flex-col">
                        <p className="font-medium text-sm text-start text-[#181D27]">{name}</p>
                        <p className="text-sm text-[#A3A5A9] mt-2 h-52 text-start">
                            {description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <span style={{ backgroundColor: recommendation.color }} className={cn(`rounded font-medium text-white text-xs p-[6px]`)}>{recommendation.name}</span>
                            <span style={{ backgroundColor: difficulty.color }} className={cn(`rounded font-medium text-white text-xs p-[6px]`)}>{difficulty.level}</span>
                        </div>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll">
                <Image width={500} height={173} className="object-cover w-[500px] h-[520px] rounded-md" alt="cenoura" src={image} />
                <div className="flex flex-col p-6 gap-6 ">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-medium">{name}</p>
                        <span style={{ backgroundColor: difficulty.color }} className={cn(`rounded font-medium text-white text-xs p-[6px]`)}>{difficulty.level}</span>
                    </div>
                    <p className="text-sm text-[#A3A5A9] text-start">
                        {description}
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-base font-medium">Recomendação</p>
                        <span style={{ backgroundColor: recommendation.color }} className={cn(`rounded font-medium text-white text-xs p-[6px]`)}>{recommendation.name}</span>
                    </div>
                    <p className="text-sm text-[#A3A5A9] text-start">
                        {recommendation.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-base font-medium">Dicas</p>
                    </div>
                    <p className="text-sm text-[#A3A5A9] text-start">
                        {tip}
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    )
}