export class feed{
    static query = async ({
                              filters: {authors},
                              offset,
                              limit,
                              reverse
                          })=>{
        let FeedPost=[];
        return FeedPost;
    };
    static getPost = async (postUrl)=>{
        let FeedPost;
        return FeedPost;
    };
    static addPost = async ({
                                content: {body}
                            })=>{
        let FeedPost;
        return FeedPost;
    };
    static editPost = async (postUrl, {
        content: {
            body
        }})=>{
        let FeedPost;
        return FeedPost;
    };
    static deletePost = async (postUrl)=>{
    };

}
export class followgraph{
    static listFollowers = async (siteUrl, {
        filters: {followedBy},
        limit,
        offset
    })=>{
        let Site=[];
        return Site;
    };
    static listFollows = async (siteUrl, {
        filters: {followedBy},
        limit,
        offset
    })=>{
        let Site=[];
        return Site;
    };
    static isAFollowingB = async (siteUrlA, siteUrlB)=>{
        let boolean = true|false;
        return boolean;
    };
    static follow = async (siteUrl)=>{
    };
    static unfollow = async (siteUrl)=>{
    };
}