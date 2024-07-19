import { useSelector } from 'react-redux';
import React from 'react';
import './List.css';

const List = () => {
    const blockArr = useSelector((state) => state);
    console.log(blockArr);

    return (
        <div className={`listWrapper`}>
            {blockArr &&
                blockArr.bloks.map((block) => {
                    return (
                        <div
                            key={block.id}
                            style={{
                                backgroundColor: `${block.backgroundColor}`,
                            }}
                            className={`listElement ${block.animation}`}
                        ></div>
                    );
                })}
        </div>
    );
};

export default List;
