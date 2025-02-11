"use client";
import { useState, useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';




export default function Pageination({pageinate , lenght}){
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const [btnLength , setBtnLength] = useState([0]);
  const [dataLength , setDataLength] = useState(lenght)
  
  
  useEffect(()=>{
        setBtnLength(
            Array.from(Array(Math.ceil(dataLength / 3 )).keys())
        );
},[]);


//   const createPageURL = (pageNumber) => {

//     const params = new URLSearchParams(searchParams);
//     params.set('page', pageNumber.toString());
//     // return `${pathname}?${params.toString()}`;
//   };

    return(
        <div className='bg-white rounded-xl w-full gap-5 flex items-center justify-center h-12 mb-5'>
            {/* <h1 className='text-3xl'>{currentPage}</h1> */}
           
           {
             btnLength.map((int , index)=>(
                <Link  
                    key={index}
                    href={`/blog?pn=${int+1}`} 
                    className="bg-zinc-200 shadow-xl w-8 h-10 rounded text-white text-lg flex items-center justify-center text-bold"
                >
                     {int+1}
                </Link>
             ))
            
            }
          
           
        </div>
    );
}