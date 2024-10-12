'use client';

export default function SideBar({ filterOptions }: { filterOptions: { name: string, options: string[] } }) {
    return (
        <div className="sm:max-w-[300px] hidden sm:block  sm:w-full sm:border-r-[1px] sm:h-full">
            <p className="py-5 px-8 border-b-[1px] font-medium">
                Filtros
            </p>
            <div className="p-8 ">
                <p className="font-medium">
                    {filterOptions.name}
                </p>
                <div className="mt-4 gap-2 flex flex-col">
                    {filterOptions.options.map((item, index) => (
                        <label key={index} className="text-sm flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500" />{item}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}