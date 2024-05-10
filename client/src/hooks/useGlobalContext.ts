import { useContext } from "react";

import { MyGlobalContext } from "../context/MyGlobalContext";

const useGlobalContext = () => useContext(MyGlobalContext);

export default useGlobalContext;
