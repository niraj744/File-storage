import { Links } from "@/Types";
import { Upload, File, Star } from "lucide-react";

export const links: Links[] = [
  { id: 1, name: "upload", icon: Upload, url: "/dashboard" },
  { id: 2, name: "files", icon: File, url: "/dashboard/file" },
];
