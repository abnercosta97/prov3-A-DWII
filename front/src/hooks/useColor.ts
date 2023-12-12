import { useContext } from "react";
import { Contexto } from "../contexts";

export default function useColor(){
    return useContext(Contexto);
}