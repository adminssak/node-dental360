import { FileTypes } from "./../../../shared/enumeration/file-type.enum";
export interface FileLibrary {
  file_type: FileTypes;
  extension: string;
  file_id: string;
  directory: string;
  name: string;
  size: number;
  client_id: string;
}
