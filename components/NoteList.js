import React from 'react';
import PropTypes from 'prop-types';
import NoteBookList from "../pages";

const addButton = () => {
    const onClick = async () => {
        try {
            const archive = await DatArchive.selectArchive({
                filters: {
                    isOwner: true,
                    type: ["profile", "nian-notebook-profile"]
                },
            });
            const info = await archive.getInfo();
            const storageItem = [{title: info.title, url: info.url}];
            const lastItem = JSON.parse(localStorage.getItem('nian-notebooks'));
            if (lastItem && lastItem.notebooks) {
                for (let item of lastItem.notebooks) {
                    storageItem.push(item);
                }
            }
            localStorage.setItem('nian-notebooks', JSON.stringify({notebooks: storageItem}));
        } catch (e) {
            console.error(e);
        }
        this.setState({});
    };
    return <button onClick={onClick}>添加已有记本</button>
};
const domItem = (data,key) => <li key={key}>
    <a href={data.url}>
        {data.title?data.title : 'notebook'}
    </a>
</li>;
const Booklist = props => {
    // const list = localStorage.getItem('nian-books');
    try {
        const list = JSON.parse(localStorage.getItem('nian-notebooks'));
        if(list && list.notebooks){
        return (
                <div>
                    <ul>
                        {list.notebooks.map((item,index) => domItem(item,index))}
                    </ul>
                    {addButton()}
                </div>
            )
        }
    } catch (e) {
        console.error(e);
    }
    return <div>
        you did't have any note here
        {addButton()}
    </div>;
};

// Booklist.propTypes = {
//
// };

export default Booklist;