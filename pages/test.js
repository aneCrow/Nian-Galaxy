import React from "react";

import NianLib from "../components/lib/nian-lib";

export default ()=>{
    const lib = new NianLib(DatArchive);
    lib.user.setProfile({name:'test'});
    return<p>{lib.user.getProfile().name}</p>
}