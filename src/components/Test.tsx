"use client"
import display from "@/actions/display"


export default function Test() {

    function hc() {
        display().then(res => {
            alert("ok session")
        }).catch(()=> {
            alert("no session")
        })
    }

    return(
        <div>
            <button onClick={hc}>Check session</button>
        </div>
    )
}