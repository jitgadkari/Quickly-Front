import React, { ReactNode, useState } from "react";

interface sideBarType {
    showSideBarExtenison:boolean,
    toggleNav:boolean,
    handleShowSidebar:()=> void;
    toggleSideNav:()=> void;

}
export const SideBarContext = React.createContext<sideBarType>({
    showSideBarExtenison:false,
    toggleNav:false,
    handleShowSidebar:()=>{},
    toggleSideNav:()=>{},


});

const SideBarContextProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
    const [showSideBarExtenison,setShowSidebarExtension]=useState<boolean>(false);
    const [toggleNav,settoggleNav]=useState<boolean>(false);

    const handleShowSidebar=()=>{
        setShowSidebarExtension((prev)=>{
            return !prev;
        })
    }
    const toggleSideNav=()=>{
        settoggleNav((prev)=>{
            return !prev;
        })
    }
 

  const contextValue:  sideBarType= {
    toggleNav,
    showSideBarExtenison,
    handleShowSidebar,
    toggleSideNav
    
  };
  return (
    <SideBarContext.Provider value={contextValue}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
