import React, { ReactNode, useState } from "react";

interface sideBarType {
    showSideBarExtenison:boolean,
    handleShowSidebar:()=> void;

}
export const SideBarContext = React.createContext<sideBarType>({
    showSideBarExtenison:false,
    handleShowSidebar:()=>{},


});

const SideBarContextProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
    const [showSideBarExtenison,setShowSidebarExtension]=useState<boolean>(false);

    const handleShowSidebar=()=>{
        setShowSidebarExtension((prev)=>{
            return !prev;
        })
    }
 

  const contextValue:  sideBarType= {
    showSideBarExtenison,
    handleShowSidebar
  };
  return (
    <SideBarContext.Provider value={contextValue}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
