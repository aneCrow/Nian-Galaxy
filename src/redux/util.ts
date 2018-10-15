export const extendObj:any = function(target:any, /*optional*/source:any, /*optional*/deep:any) {
    target = target || {};
    const sType = typeof source;
    let i = 1;
    let options;
    if( sType === 'undefined' || sType === 'boolean' ) {
        deep = sType === 'boolean' ? source : false;
        source = target;
        // @ts-ignore
        target = this;
    }
    if( typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]' )
        source = {};
    while(i <= 2) {
        options = i === 1 ? target : source;
        if( options != null ) {
            for( let name in options ) {
                let src = target[name], copy = options[name];
                if(target === copy)
                    continue;
                if(deep && copy && typeof copy === 'object' && !copy.nodeType)
                    target[name] = extendObj(src ||
                        (copy.length != null ? [] : {}), copy, deep);
                else if(copy !== undefined)
                    target[name] = copy;
            }
        }
        i++;
    }
    return target;
};