import { Spinner } from "@nextui-org/react";

export default function Loader (){
    return(
        <div className="h-[80vh] flex justify-center items-center">
            <Spinner></Spinner>
        </div>
    )
}