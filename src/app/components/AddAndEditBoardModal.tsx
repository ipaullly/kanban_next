import { useAppDispatch, useAppSelector } from "@/components/redux/hooks";
import { Modal, ModalBody } from "./Modal";
import {
  closeAddAndEditBoardModal,
  getAddAndEditBoardModalValue,
  getAddAndEditBoardModalVariantValue,
} from "@/components/redux/features/appSlice";

export default function AddAndEditBoardModal() {
  //get modal variant
  const modalVariant = useAppSelector(getAddAndEditBoardModalVariantValue);
  const dispatch = useAppDispatch();
  // opens the modal if isOpen evaulates to true
  const isOpen = useAppSelector(getAddAndEditBoardModalValue);
  // close modal function
  const closeModal = () => dispatch(closeAddAndEditBoardModal());

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <ModalBody>
        <p>{modalVariant}</p>
      </ModalBody>
    </Modal>
  );
}
