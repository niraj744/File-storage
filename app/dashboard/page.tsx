import Upload from "@/components/CustomComponents/Upload";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1 p-3">
        <h1 className="capitalize text-2xl font-bold text-center">
          start <span className="text-primary capitalize">uploading</span> file
          and <span className="text-primary capitalize">share</span> it
        </h1>
        <Upload />
      </div>
    </>
  );
}
