import React from "react";

export default ({type,primary,secondary,background})=>{
    return <style jsx global>{`
                        html {
                            background: ${background}
                        }
                    `
        }</style>
}