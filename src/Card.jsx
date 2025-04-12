import { useState, useEffect } from 'react';

function Card({goalText, progress, onProgressChange, onEdit, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(goalText);
    // Remove this line since we now get progress from props
    // const [progress, setProgress] = useState(0);

    // Update editValue when goalText changes
    useEffect(() => {
        setEditValue(goalText);
    }, [goalText]);

    function editCard(e) {
        setIsEditing(true);
        const currentCard = e.target.closest('.card');
        const editForm = currentCard.querySelector('.editForm');
        editForm.style.display = 'flex';
    }

    function cancelEdit(e) {
        setIsEditing(false);
        setEditValue(goalText);
        const currentCard = e.target.closest('.card');
        const editForm = currentCard.querySelector('.editForm');
        editForm.style.display = 'none';
    }

    function handleSubmit(e) {
        e.preventDefault();
        onEdit(editValue);
        setIsEditing(false);
        const currentCard = e.target.closest('.card');
        const editForm = currentCard.querySelector('.editForm');
        editForm.style.display = 'none';
    }

    return(
        <div className="card">
            <div className="card-content">
                <div><img src="https://media.istockphoto.com/id/638903370/photo/woman-at-the-gym-drinking-water.jpg?s=612x612&w=0&k=20&c=MFsUJD0a3iR_Sg1wYj2GX_QhzFeHqzLdKjg3ALJNxWk=" alt="" /></div>
                <div className="number"><h2>{progress}</h2></div>
                <div className="percent"><p>%</p></div>
                <div className="title">
                    <h1>{goalText}</h1>
                </div>
            </div>
            <div className="card-buttons">
                <div>
                    <label htmlFor="range">Progress:</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={progress} 
                        onChange={(e) => onProgressChange(Number(e.target.value))}
                    />
                    <span>{progress}%</span>
                </div>
               
                <div>
                    <button className="edit-btn" onClick={editCard}><i className="fas fa-edit"></i></button>
                    <button className="delete-btn" onClick={onDelete}><i className="fas fa-trash"></i></button>
                </div>
            </div>

            <div className="editForm">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="editInput" 
                        type="text" 
                        placeholder="Edit your goal" 
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button className="saveBtn" type="submit">Save</button>
                    <button className="cancelBtn" type="button" onClick={cancelEdit}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Card
