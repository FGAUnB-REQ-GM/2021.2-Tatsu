import { MdCancel, MdCheckCircle } from "react-icons/md";
import { BackgroundModal,DeleteModalContainer,DeleteModalText,DeleteModalButtonsDiv,DeleteModalButtons } from "./style";

const DeleteModal = ({ title, onClose, onConfirm}) => (
    <BackgroundModal>
        <DeleteModalContainer>
            <DeleteModalText>
                Deseja deletar {title} ?
            </DeleteModalText>
            <DeleteModalButtonsDiv>
                <DeleteModalButtons onClick={()=>onClose} style={{marginLeft:"auto"}}>
                    <MdCancel/>
                    Cancelar
                </DeleteModalButtons>
                <DeleteModalButtons onClick={()=>(onConfirm())}>
                   <MdCheckCircle/> Confirmar
                </DeleteModalButtons>
            </DeleteModalButtonsDiv>
        </DeleteModalContainer>
    </BackgroundModal>
);

export default DeleteModal;
