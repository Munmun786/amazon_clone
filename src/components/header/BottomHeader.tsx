import { LuMenu } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { StateProps } from "../../../type";
import {signOut} from "next-auth/react"
import { removeUser } from "@/store/nextSlice";


const BottomHeader = () => {
const dispatch = useDispatch();
  const { userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const handleSignOut = () => {
  signOut();
dispatch(removeUser());
  }
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 border border-transparent px-2 hover:border-white cursor-pointer duration-300">
        <LuMenu />
        All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Todays Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Sell
      </p>
      {userInfo && (
        <button onClick={handleSignOut} className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400  text-amazon_yellow cursor-pointer duration-300">
          Sing Out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
