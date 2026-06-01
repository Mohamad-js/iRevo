import fs from "fs/promises";
import path from "path";

export const readJsonFile = async (
   filename
) => {

   const filePath = path.join(
      process.cwd(),
      filename
   );

   const file = await fs.readFile(
      filePath,
      "utf-8"
   );

   return JSON.parse(file);
}