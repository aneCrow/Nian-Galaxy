import React from "react";

export default  ()=>{
    return <style jsx global>{`
                        body,html,#__next,#nian-layout {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                        }
                        .flex_center {
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                        }
                        .border {
                            border:5px solid white;
                        }
    `}</style>
}