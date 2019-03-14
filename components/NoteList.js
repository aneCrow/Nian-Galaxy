import React from 'react';
import PropTypes from 'prop-types';

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
                </div>
            )
        }
    } catch (e) {
        console.error(e);
    }
    return <div>you did't have any note here</div>;
};

// Booklist.propTypes = {
//
// };

export default Booklist;