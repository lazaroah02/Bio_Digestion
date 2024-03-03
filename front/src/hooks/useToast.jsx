import {Toast} from 'primereact/toast'
import { useRef } from 'react';

export function useToast() {
    const toastRef = useRef(null);

    const showToast = ({
        severity = "success",
        summary = "Éxito",
        detail = "Operación Exitosa",
        life = 3000,
      }) => {
        toastRef.current.show({
          severity: severity,
          summary: summary,
          detail: detail,
          life: life,
        });
      };

      //show success message
      function showSuccessMessage(message){
        showToast({
          severity: "success",
          summary: "Éxito",
          detail: message,
        });
      }

      //show error message
      function showErrorMessage(message){
        showToast({
          severity: "error",
          summary: "Error",
          detail: message,
        });
      }

     function toast(){
        return <Toast ref={toastRef} position="bottom-center" />
     } 

    return ({toast, showToast, showSuccessMessage, showErrorMessage});
}

