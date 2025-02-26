import React from 'react';
import "./Opened.css";

const Opened = ({ showClosed, newTask, setNewTask, handleAddTask }) => {
    return (
        <div className="secc">
            <div className='forms'>
                <div className="input">
                    <h1>Title</h1>
                    <input 
                        type="text" 
                        value={newTask.title} 
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                </div>
                <div className="input">
                    <h1>Duration (days)</h1>
                    <input 
                        type="text" 
                        value={newTask.duration} 
                        onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
                    />
                </div>
                <div className="input">
                    <h1>Date</h1>
                    <input 
                        type="date" 
                        value={newTask.date} 
                        onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                    />
                </div>
            </div>

            <div className="buttons">
                <button onClick={handleAddTask}>Add</button>
                <button onClick={showClosed}>Cancel</button>
            </div>
        </div>
    );
}

export default Opened;
