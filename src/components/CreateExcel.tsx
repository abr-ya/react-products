import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@chakra-ui/react";

interface ICreateExcel<T> {
  buttonTitle?: string;
  data: T[];
  fileName?: string;
  sheetName?: string;
  size?: "sm" | "md" | "lg" | "xs";
}

const CreateExcel = <T,>({
  buttonTitle = "Save to Excel",
  data,
  fileName = "data",
  sheetName = "Sheet1",
  size = "md",
}: ICreateExcel<T>) => {
  const exportData = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, `${fileName}.xlsx`);
  };

  return (
    <Button colorScheme="blue" onClick={exportData} size={size}>
      {buttonTitle}
    </Button>
  );
};

export default CreateExcel;
