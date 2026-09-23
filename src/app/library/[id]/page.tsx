import LibraryDetailsCard from "@/components/LibraryDetailsCard";
import { libraryType } from "@/type/libraryType";

interface LibraryDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getAllData = async (): Promise<libraryType[]> => {
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }

  return res.json();
};

const LibraryDataDetails = async ({
  params,
}: LibraryDetailsProps) => {
  const { id } = await params;

  const data = await getAllData();

  const newData = data.find(
    (item) => item.id === Number(id)
  );

  console.log("newData", newData);

  if (!newData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f13]">
        <h1 className="text-2xl font-bold text-white">
          Library Not Found
        </h1>
      </div>
    );
  }

  return (
    <LibraryDetailsCard data={newData} />
  );
};

export default LibraryDataDetails;