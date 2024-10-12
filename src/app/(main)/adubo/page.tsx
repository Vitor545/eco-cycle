'use client';
import { Search, X } from "react-feather";
import SideBar from "../_components/side-bar";
import Card from "../_components/card";
import { adubos, filterOptionsAdubo } from "@/utils/adubo";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/utils";

export default function AduboPage() {
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname()
    const search = searchParams.get('search')
    const [searchInput, setSearchInput] = useState(search ?? '')
    const [filtered, setFiltered] = useState(adubos.filter(el => {
        if (search) {
            return el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        }
        return el
    }).sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }))

    const [orderSelected, setOrderSelected] = useState('name')

    const order = {
        "Baixo": 1,
        "Médio": 2,
        "Alto": 3
    } as { [key: string]: number };

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        setFiltered(adubos.filter(el => {
            if (search) {
                return el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }
            return el
        }).sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        }))
    }, [search])

    return (
        <div className="flex h-full mt-[-80px] pt-20">
            <SideBar filterOptions={filterOptionsAdubo} />
            <div className="flex-col p-8 gap-8 flex w-full overflow-y-scroll">
                <div className=" max-w-[600px] w-full">
                    <div className="bg-[#F4F4F4] h-14 flex rounded-lg items-center px-5">
                        <Search onClick={() => router.push(pathname + '?' + createQueryString('search', searchInput))} className="w-4 h-4" />
                        <input onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                return router.push(pathname + '?' + createQueryString('search', searchInput))
                            }
                        }} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="bg-[#F4F4F4] w-full h-full p-4 mx-5" type="text" />
                        <X onClick={() => {
                            setSearchInput('')
                            router.push(pathname)
                        }} className="w-4 h-4" />
                    </div>
                </div>
                {search && <p className="text-[#A3A5A9]">Resultados para a pesquisa <span className="text-[#181d27] font-medium">“{search}”</span></p>}
                <div className="flex items-center gap-4">
                    <p className="text-[#A3A5A9]">Ordenar</p>
                    <button onClick={() => {
                        setFiltered(prev => prev.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        }))
                        setOrderSelected('name')
                    }
                    } className={cn("border-[1px] py-2 px-3 rounded text-[#A3A5A9]", orderSelected === 'name' && 'text-white bg-[#69B578]')}>Nome</button>
                    <button onClick={() => {
                        setFiltered(prev => prev.sort((a, b) => order[a.difficulty.level] - order[b.difficulty.level]))
                        setOrderSelected('difficulty')
                    }} className={cn("border-[1px] py-2 px-3 rounded text-[#A3A5A9]", orderSelected !== 'name' && 'text-white bg-[#69B578]')}>Dificuldade na produção</button>
                </div>
                <div className="flex gap-8 flex-wrap">
                    {filtered.length > 0 ? filtered.map((plant, index) => (
                        <Card key={index} {...plant} />
                    )) : <p className="italic">Sem resultados</p>}
                </div>
            </div>
        </div>
    )
}