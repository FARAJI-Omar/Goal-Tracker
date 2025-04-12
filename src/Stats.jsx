function Stats({ goals }) {
    // Calculate daily progress
    const calculateDailyProgress = () => {
        // If there are no goals, return 0
        if (!goals || goals.length === 0) {
            return 0;
        }

        // Calculate the average progress across all goals
        const totalProgress = goals.reduce((sum, goal) => sum + (goal.progress || 0), 0);
        const averageProgress = Math.round(totalProgress / goals.length);

        return averageProgress;
    };

    const dailyProgress = calculateDailyProgress();

    return (
        <div className="stats-card">
            <h2>Your Daily Progress</h2>
            <div className="progress-container">
                <div className="progress-value">{dailyProgress}%</div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${dailyProgress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
