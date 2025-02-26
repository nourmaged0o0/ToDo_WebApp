import React, { useState } from 'react';
import "./Container.css";
import Opened from './Opened';

const Container = () => {
    const [isOpenedVisible, setIsOpenedVisible] = useState(false);
    const [tasks, setTasks] = useState([]); 
    const [newTask, setNewTask] = useState({ title: "", duration: "", date: "" });

    const showOpened = () => {
        setIsOpenedVisible(true);
    };

    const showClosed = () => {
        setIsOpenedVisible(false);
    };

    const handleAddTask = () => {
        if (newTask.title && newTask.duration && newTask.date) {
            setTasks([...tasks, newTask]); 
            setNewTask({ title: "", duration: "", date: "" });
            setIsOpenedVisible(false); 
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <div className='cont'>
            {isOpenedVisible ? (
                <Opened 
                    showClosed={showClosed} 
                    newTask={newTask} 
                    setNewTask={setNewTask} 
                    handleAddTask={handleAddTask} 
                />
            ) : (
                <div className='firstc'>
                    <h1>ToDo List</h1>
                    <button onClick={showOpened}>Add New Task</button>
                </div>
            )}

            {tasks.map((task, index) => {
                const dateObj = new Date(task.date);
                const day = dateObj.getDate(); 
                const month = dateObj.toLocaleString('en-US', { month: 'short' });

                return (
                    <div key={index} className="list">
                        <div className="dateandtit">
                            <div className="date">
                                <h1>{month}</h1>
                                <h1>{day}</h1>
                            </div>
                            <div className="title">
                                <h1>{task.title}</h1>
                            </div>
                        </div>
                        <div className="day">
                            <h1>{task.duration} days</h1>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Container;
