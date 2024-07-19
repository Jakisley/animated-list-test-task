import { useDispatch } from 'react-redux';
import './App.css';
import React, { useState } from 'react';
import { ListSlice } from './store/reducers/ListSlice';
import List from './components/List';

function App() {
    const dispatch = useDispatch();
    const { addBlock, deleteBlock, animateLastItem } = ListSlice.actions;
    const [isAnimationStop, setAnimationStop] = useState(true);

    const handleDelete = () => {
        if (isAnimationStop) {
            setAnimationStop(false);
            dispatch(animateLastItem());
            setTimeout(() => {
                dispatch(deleteBlock());
                setAnimationStop(true);
            }, 1000);
        }
    };

    return (
        <div className="app">
            <button
                className="listControler"
                onClick={() => dispatch(addBlock())}
            >
                Добавить
            </button>
            <button className="listControler" onClick={handleDelete}>
                Удалить
            </button>
            <List />
        </div>
    );
}

export default App;
