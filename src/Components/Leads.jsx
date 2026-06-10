import React, { useEffect ,useState} from 'react'
import { DeleteIcon } from './Icon.jsx';

const Leads = () => {

    let [dataLeads , isDataLeads] = useState([])


    // --- YE FUNCTION ADD KAREIN ---
    const deleteLead = (serial) => {
        if (window.confirm("Are you sure you want to delete this lead?")) {
            // Extension ko delete ka message bhejo
            window.postMessage({ type: "DELETE_LEAD_REQUEST", serial: serial }, "*");
            
            // UI se foran hata do (Optimistic Update)
            isDataLeads(prev => prev.filter(lead => lead.serial !== serial));
        }
    };

    const isPhoneInEmail = dataLeads?.email?.includes(dataLeads?.phone) || false;

    useEffect(()=>{
      const handleMessage = (event) => {
        // Sirf hamare extension wale message ko pakdo
        if (event.data.type === "FROM_EXTENSION_STORAGE") {
            console.log("Real-time data received!", event.data.leads);
            isDataLeads(event.data.leads); // Yeh state update karega aur UI refresh hogi
        }

        // Agar React ne data manga hai toh content.js bhej dega
        if (event.data.type === "REQUEST_DATA_FROM_CONTENT") {
             // Yeh toh pehle se likha hoga
        }
    };

    window.addEventListener("message", handleMessage);

    // Page load par pehla data mangwane ke liye
    window.postMessage({ type: "REQUEST_DATA_FROM_CONTENT" }, "*");

    return () => window.removeEventListener("message", handleMessage);
    },[])

  return (
  <>
    <table className='w-full flex flex-col'>
        <thead className='w-full'>
            <tr className='w-full flex justify-around items-center py-2 border-black-50 border-y-2  bg-amber-200'>
                <th className='w-[3%]'>NO</th>
                <th className='w-[10%]'>Serial</th>
                <th className='w-[25%]'>Mark</th>
                <th className='w-[10%]'>Date</th>
                <th className='w-[20%]'>Correspondent</th>
                <th className='w-[10%]'>Phone</th>
                <th className='w-[15%]'>E-mail</th>
                <th className='w-[5%]'></th>
            </tr>
        </thead>
    <tbody className='w-full flex flex-col'>
        {
           dataLeads?.length > 0 &&
            
            dataLeads?.map((lead, i)=>{
              
                const isPhoneInEmail = lead?.email && lead?.phone 
                                ? lead.email.includes(lead.phone) 
                                : false  
                return(
                <tr key={i+1} className={`${isPhoneInEmail ? "bg-red-200" : "bg-white"} group w-full flex justify-around items-center py-2 
    border-y border-transparent 
     hover:border-gray-200 
    /* Left aur Bottom dono shadows mix kar di hain */
    hover:shadow-[-5px_0_15px_-5px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]
    hover:z-10 
    transition-all duration-200 ease-in-out cursor-pointer`}>
                    <td className='text-center w-[3%] truncate overflow-hidden whitespace-nowrap'>{i+1}.</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'><a target='_blank' href={`https://tsdr.uspto.gov/#caseNumber=${lead.serial}&caseSearchType=CASE_SEARCH_NUMBER&caseType=DEFAULT&searchType=documentSearch`}>{lead.serial}</a></td>
                    <td className='text-center w-[25%] truncate overflow-hidden whitespace-nowrap'>{lead?.mark}</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'>{lead?.registrationDate}</td>
                    <td className='text-center w-[20%] truncate overflow-hidden whitespace-nowrap'>{lead?.correspondent}</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'>{lead?.phone}</td>
                    <td className='text-center w-[15%] truncate overflow-hidden whitespace-nowrap'>{lead?.email}</td>
                <td className=' w-[3%] h-[35px]'><span onClick={()=>deleteLead(lead.serial)} className='w-full hidden group-hover:flex transition-all ease-in-out duration-500'><button className='w-[35px] h-[35px] rounded-full bg-[#e9eef6] flex items-center justify-center hover:bg-[#ff6467] cursor-pointer transition-all ease-initial duration-300'><DeleteIcon className='hover:text-white'/></button></span></td>
                </tr>)
        
})

        }
    </tbody>
    





    </table>
 </>
 
  )
}

export default Leads
