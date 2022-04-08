import { FileRow } from "./style";
import { FaInfoCircle, FaPencilAlt, FaPlay, FaTrashAlt } from 'react-icons/fa';

const FileInfo = ({
  nameFile,
  author,
  date,
  onPlay,
  onEdit,
  onDelete,
}) => {
  return (
    <FileRow>
      <label id="label1">{nameFile}</label>
      <label id="label2">{author}</label>
      <label id="label3">{date}</label>
      <div id="button1" style={{cursor:"pointer"}} type="button" onClick={onPlay}> <FaPlay /> </div>
      <div id="button2" style={{cursor:"pointer"}} type="button" onClick={onEdit}> <FaPencilAlt /> </div>
      <div id="button3" style={{cursor:"pointer"}} type="button" onClick={onDelete}> <FaTrashAlt /> </div>
    </FileRow>
  );
};

export default FileInfo;
