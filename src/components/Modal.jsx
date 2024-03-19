import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"


const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {isOpen &&
                (<>
                    <div className="z-50 relative min-h-[200px] max-w-[80%] bg-white p-4 m-auto">
                        <div className="flex justify-end">
                            <AiOutlineClose onClick={onClose} className="text-2xl self-end cursor-pointer" />
                        </div>
                     </div>

                    <div className=" absolute top-0 h-screen backdrop-blur w-screen z-40" onClick={onClose}>
                    </div>

                </>)
            }
        </>, document.getElementById("modal-root")
    );
};

export default Modal