// src/urlParametersTable.js

'use client'

import { useSearchParams } from 'next/navigation'

function URLParametersTable() {
  const searchParams = useSearchParams()

  // Print a html table with all URL parameters
  return (
    <table className="table-auto">
      <thead>
        <tr className='border-b-2 border-[#46a0ae] py-3'>
          <th className='border-r-2 border-[#46a0ae] pr-3'>Parameter</th>
          <th className='pl-3'>Value</th>
        </tr>
      </thead>
      <tbody>
        {searchParams.size === 0 ?
          <tr className='border-t-2 border-[#ababa9] py-3'>
            <td colSpan='2' className='text-center'>No parameters</td>
          </tr>
          :          
          Array.from(searchParams.entries()).map(([key, value]) => (
            <tr className='border-t-2 border-[#ababa9] py-3' key={key}>
              <td className='border-r-2 border-[#46a0ae] pr-3'>{key}</td>
              <td className='pl-3'>{value}</td>
            </tr>
        ))}
      </tbody>
    </table>
  )
}

export default URLParametersTable;