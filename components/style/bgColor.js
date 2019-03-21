import React from "react";

export default ()=>{
    const color = () => {
        const colorList = [ '#EEAB46', '#EFDCC8', '#EEAFAB', '#6D9F99', '#EC666A' ];
        const random = Math.floor(Math.random()*(colorList.length+1));
        return colorList[ random ];
    };
    return <style jsx global>{`
                        html {
                            background: ${color()}
                        }
                    `
        }</style>
}