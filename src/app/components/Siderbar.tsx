// src/app/components/Sidebar.tsx

import { setCurrentBoardName } from "@/components/redux/features/appSlice";
import { useAppDispatch } from "@/components/redux/hooks";
import { useFetchDataFromDbQuery } from "@/components/redux/services/apiSlice";
import { useState } from "react";

export default function Sidebar() {
  // state to track index of active board during navigation
  const [activeBoard, setActiveBoard] = useState<number>(0)

  const { data } = useFetchDataFromDbQuery();
  const dispatch = useAppDispatch();

  // function to handle navigation through boards
  const handleNav = (index: number, name: string) => {
    setActiveBoard(index)
    setCurrentBoardName(name)
  }

  return (
    <aside className="w-[18.75rem] flex-none dark:bg-dark-grey h-full py-6 pr-6">
      {data && (
        <>
          {/* Display the number f boards available in the db */}
          <p className="text-medium-grey pl-[2.12rem] text-[.95rem] font-semibold uppercase pb-3">
            {`All Boards (${data[0]?.boards.length})`}
          </p>
          {/* Display names of each board */}
          {data[0]?.boards.map(
            (board: { [key:string] : any }, index: number ) => {
              const { name, id } = board;
              const isActive = index === activeBoard
              return (
                <div
                  key={id} 
                  onClick={()=>handleNav(index, name)}
                  className={`
                    ${isActive 
                      ? 'rounded-tr-full rounded-br-full bg-blue-500 text-white'
                      : 'text-black'
                    }
                    cursor-pointer flex items-center
                    space-x-2 pl-[2.12rem] py-3 pb-3
                  `}
                >
                  <p className="text-white text-lg capitalize">{name}</p>
                </div>
              )
            }
          )}
        </>
      )}
      <button className="flex items-center space-x-2 pl-[2.12rem] py-3">
        <p className="text-base font-bold capitalize text-main-purple">
          + Create New Board
        </p>
      </button>
    </aside>
  );
}
