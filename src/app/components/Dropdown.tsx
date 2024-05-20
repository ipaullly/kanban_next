import { openAddAndEditBoardModal, openDeleteBoardAndTaskModal } from "@/components/redux/features/appSlice";
import { useAppDispatch } from "@/components/redux/hooks";

interface IDropdown {
  show: boolean;
}

export default function Dropdown({ show }: IDropdown) {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`
        ${show ? "block" : "hidden"} 
        w-48 absolute top-20 bg-white
        border shadow-lg right-6 py-2 rounded-2xl
      `}
    >
      <div className="hover:bg-gray-300">
        <button 
          onClick={() => dispatch(openAddAndEditBoardModal('Edit Board'))}
          className="text-sm px-4 py-2"
        >Edit Board</button>
      </div>
      <div className="hover:bg-gray-300">
        <button
           onClick={() => dispatch(openDeleteBoardAndTaskModal({variant: "Delete this board?"}))}
          className="text-sm px-4 py-2"
        >Delete Board</button>
      </div>
    </div>
  );
}
