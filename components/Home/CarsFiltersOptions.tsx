import React, { useEffect, useState } from 'react'

function CarsFiltersOptions({ carsList,setBrand,orderCarList }: any) {

    const [brandList, setBrandList] = useState<any>();
    const BrandSet = new Set()

    useEffect(() => {
        if (carsList) {
            filterCarList();
        }
    }, [carsList])

    const filterCarList = () => {
        carsList.forEach((element: any) => {
            BrandSet.add(element.carBrand);
        });
        console.log(BrandSet)
        setBrandList(Array.from(BrandSet));
    }

    return (
        <div className='mt-10 flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
                <h2>Explore our cars you might like</h2>
            </div>
            <div className='flex gap-3 ml-2 mt-5'>
                <select className="select select-bordered w-full max-w-xs"
                onChange={(e)=>orderCarList(e.target.value)}>
                    <option disabled selected>Price</option>
                    <option value={-1}>Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>
                <select
                    className="select select-bordered md:block w-full max-w-xs hidden"
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option disabled selected>Automaker</option>
                    {brandList && brandList.map((brand: string, index: number) => (
                        <option key={index}>{brand}</option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default CarsFiltersOptions
