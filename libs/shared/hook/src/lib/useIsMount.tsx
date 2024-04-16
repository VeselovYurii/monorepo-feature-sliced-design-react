import { useRef,useEffect } from "react";

export function useIsMount(cb?: () => void,deps?: any[]):boolean {
  const isMount = useRef(true);
  const cbRef = useRef(cb);

  useEffect( () => {
    cbRef.current = cb;
  }, [cb]);
  
  useEffect(() => {
   if(isMount.current){
     isMount.current = false;
   } else {
    cbRef.current && cbRef.current();
   }
  }, deps as any[]);

  return isMount.current;
}