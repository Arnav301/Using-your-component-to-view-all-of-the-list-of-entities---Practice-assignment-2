import { useState } from "react"

function Button() {

    const [color , setColor] = useState(false)
    return(
        <div>
             <button style={{
                background: color ? "black" : "crimson",

            }} className="like" onClick={() => {setColor(!color)}}>
                   {color ? "Like This Post ❤️" : "Liked the post"}
            </button>
        </div>
    )
}

export default Button