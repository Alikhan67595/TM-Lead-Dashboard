import React, { useEffect ,useState} from 'react'
import { DeleteIcon } from './Icon.jsx';

const Leads = () => {

    let [dataLeads , isDataLeads] = useState([])

    // let dataLeads = [
    //     {
    //         "mark" : "YOGA SUPPORTfsgserrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "9162764083info@yogasupport.org"
    //     },
    //     {
    //         "mark" : "YOGA SUPPORT",
    //         "serial" : "87338833",
    //         "date" : "Aug. 22, 2017",
    //         "name" : "Russell, Hana Ray",
    //         "phone": "9162764083",
    //         "email": "info@yogasupport.org"
    //     },
    // ]

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
            <tr className='w-full flex justify-around items-center py-2 border-black-50 border-y-2  bg-amber-300'>
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
    <tbody className='w-full'>
        {
           dataLeads?.length > 0 &&
            
            dataLeads?.map((lead, i)=>{
              
                const isPhoneInEmail = lead?.email && lead?.phone 
                                ? lead.email.includes(lead.phone) 
                                : false  
                return(
                <tr key={i+1} className={`${isPhoneInEmail ? "bg-red-200" : "bg-white"} group w-full flex justify-around items-center py-1 bg-gray-200  border-y-2 border-black-500`}>
                    <td className='text-center w-[3%] truncate overflow-hidden whitespace-nowrap'>{i+1}.</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'><a target='_blank' href={`https://tsdr.uspto.gov/#caseNumber=${lead.serial}&caseSearchType=CASE_SEARCH_NUMBER&caseType=DEFAULT&searchType=statusSearch`}>{lead.serial}</a></td>
                    <td className='text-center w-[25%] truncate overflow-hidden whitespace-nowrap'>{lead?.mark}</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'>{lead?.registrationDate}</td>
                    <td className='text-center w-[20%] truncate overflow-hidden whitespace-nowrap'>{lead?.correspondent}</td>
                    <td className='text-center w-[10%] truncate overflow-hidden whitespace-nowrap'>{lead?.phone}</td>
                    <td className='text-center w-[15%] truncate overflow-hidden whitespace-nowrap'>{lead?.email}</td>
                <td className=' w-[3%] h-[35px]'><span className='w-full hidden group-hover:flex transition-all ease-in-out duration-500'><button className='w-[35px] h-[35px] rounded-full bg-[#e9eef6] flex items-center justify-center hover:bg-[#ff6467] cursor-pointer transition-all ease-initial duration-300'><DeleteIcon className='hover:text-white'/></button></span></td>
                </tr>)
        
})

        }
    </tbody>
    





    </table>
 </>
 
  )
}

export default Leads