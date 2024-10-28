import { getFileById } from "@/Actions/file.actions";
import Preview from "@/components/CustomComponents/Preview";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getFileById(params.id);
  if (data) {
    return (
      <>
        <Preview data={data} />
      </>
    );
  }
};

export default page;
