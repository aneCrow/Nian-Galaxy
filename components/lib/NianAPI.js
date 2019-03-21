export default class NianAPI {
    constructor(test){
                if(!NianAPI.instance){//单例模式
                        this.testd = test;
                        NianAPI.instance = this;
                    }
                return NianAPI.instance;
            }

    test() {

                }
}