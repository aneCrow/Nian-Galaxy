import React from "react";

import NianLib from "../components/lib/nian-lib";

export default ()=>{
    const nianlib = new NianLib(DatArchive);
    nianlib.user.setProfile({name:'test'});
    return<p>{nianlib.user.getProfile().name}</p>
}