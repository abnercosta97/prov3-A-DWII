import { createContext, useEffect, useState } from "react";
import { ColorProps, ContextProps } from "../types";
import service from "../services/Color";

export const Contexto = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [colors, setColors] = useState([] as ColorProps[]);

  async function remove(id:number){
    const r = await service.remove(id);
    if( r.count > 0 ){
      list();
    }
  }

  async function create(color:ColorProps){
    const r = await service.create(color);
    if( r.id ){
      list();
    }
    else {
      alert(r.message);
    }
  }

  async function list() {
    const r = await service.list();
    setColors(r);
  }
  
  useEffect(() => {
    list();
  }, []);

  return (
    <Contexto.Provider value={{ colors, remove, create }}>
      {children}
    </Contexto.Provider>
  );
}
