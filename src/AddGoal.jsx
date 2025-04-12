function AddGoal() {
    const showAddGoal = () => {
        const form = document.querySelector('form');
        const bodyDiv = document.querySelector('.body');
        
        form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
        bodyDiv.style.filter = form.style.display === 'flex' ? 'blur(15px)' : 'none';
    };

    return(
        <button className="addgoal" onClick={showAddGoal}>+ goal</button>
    );
}

export default AddGoal
