import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function SearchCategory() {
  return (
    <div className=' mb-10 items-center flex flex-col gap-1'>
        <h2 className=' font-bold text-4xl'>Search 
         <span className=' text-primary'> Doctors</span> </h2>

        <h2 className=' text-gray-500 text-xl'>Search your doctor and Book Appointment in one click</h2>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search here.." />
            <Button type="submit"> <Search className=' h-4 w-4 mr-1' /> Search</Button>
        </div>
    </div>
  )
}

export default SearchCategory