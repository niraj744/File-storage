import { getFileById } from "@/Actions/file.actions";
import FileDownload from "@/components/CustomComponents/FileDownload";
import { FileTypes } from "@/Types";
import { redirect } from "next/navigation";

export default async function FilePreviewPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getFileById(params.id);
  if (data) {
    return (
      <>
        <FileDownload file={data} />
      </>
    );
  }
  return redirect("/");
}
