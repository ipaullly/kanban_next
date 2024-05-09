// src/app/components/BoardTasks.tsx

import { getCurrentBoardName } from "@/components/redux/features/appSlice";
import { useAppSelector } from "@/components/redux/hooks";
import { useFetchDataFromDbQuery } from "@/components/redux/services/apiSlice";
import { useEffect, useState } from "react";


interface ITask {
  title: string,
  description: string,
  status: string
}

interface Column {
  name: string,
  tasks?: ITask[]
}

export default function BoardTasks() {
  // is loading state and data from the database
  const { isLoading, data } = useFetchDataFromDbQuery()
  // manage column data in columns state
  const [columns, setColumns] = useState<Column[]>([])
  // get active board name from redux store
  const activeBoard = useAppSelector(getCurrentBoardName)

  // once data is fetched we handle the side effects
  useEffect(() => {
    if (data !== undefined) {
      const [boards] = data;
      if (boards) {
        // get data of active board
        const activeBoardData = boards.boards.find(
          (board: {name: string}) => board.name === activeBoard
        )
        if (activeBoardData) {
          const { columns } = activeBoardData;
          setColumns(columns)
        }
      }
    }
    return () => {}
  }, [data, activeBoard])
  

  return (
    <div className="overflow-x-auto overflow-y-auto w-full p-6 bg-stone-200">
      {
        isLoading ? (
          <p className="text-3xl w-full text-center font-bold">Loading tasks...</p>
        ) : (
          <>
            {
              columns.length > 0 ? (
                <div className="flex space-x-6">
                  
                </div>
              ):(
                <div className="w-full h-full flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <p className="text-black text-sm">
                      This board is empty. Create a new column to get started.
                    </p>
                    <button className="bg-blue-500 text-black px-4 py-2 flex mt-6 rounded-3xl items-center space-x-2">
                      <p>+ Add New Column</p>
                    </button>
                  </div>
                </div> 
              )
            }
          </>
        )
      }
    </div>
  );
}
