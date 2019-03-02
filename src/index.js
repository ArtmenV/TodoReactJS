import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
    <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
    </ul>
    );
};

const SearchPanel = () => {
    return <input placeholder="search" />
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const App = () => {
    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
    );
};

ReactDOM.render(<App />, 
    document.getElementById('root'));