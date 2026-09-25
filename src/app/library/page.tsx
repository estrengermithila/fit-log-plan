import LibraryCard from "@/components/LibraryCard";
import { libraryType } from "@/type/libraryType";


const getAllData = async():Promise<libraryType[]>=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`)
    
    if(!res.ok){
        throw new Error("Failed To Data Fetch")
    }
    
    return res.json()
}

const AllLibrary = async() => {
    const libraryData = await getAllData()
    console.log(libraryData)
    return (
        <div>
            <div>
                <h1 className='text-6xl font-bold mb-4' >THE LIBRARY</h1>
                <p className='text-base mb-16 font-semibold '>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    libraryData.map(library=><LibraryCard key={library.id} library={library}></LibraryCard>)
                }
            </div>
        </div>
    );
};

export default AllLibrary;