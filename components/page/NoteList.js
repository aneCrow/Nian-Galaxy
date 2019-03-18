import React from 'react';
import PropTypes from 'prop-types';
import PMG from "../profileManager";

const addButton = () => {
    const onClick = async () => {
        try {
            await PMG.noteSelect(localStorage);
        } catch (e) {
            console.error(e);
        }
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
        const list = PMG.getNoteList();
        if(list && list.notes){
            return (
                <div>
                    <ul>
                        {list.notes.map((item,index) => domItem(item,index))}
                        <li>{addButton()}</li>
                    </ul>
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