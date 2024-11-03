import React from 'react';
import { useNavigate  } from 'react-router-dom';
// function BusinessOwnerDashboard() {
//     const handleAddListing = async () => {
//         // API call to add listing
//     };
    function BusinessOwnerDashboard() {
        const navigate = useNavigate();
    
        const handleAddListing = async () => {
            // API call to add listing
        };
    return (
        <div>
            <h2>Business Owner Dashboard</h2>
            <button onClick={handleAddListing}>Add New Listing</button>
            <div className="options-section">
                <h3>For Business Owners</h3>
                <div className="owner-options">
                    <button onClick={() => navigate('/add-listing')} className="option-card">
                        <span role="img" aria-label="add">🏢</span>
                        <div>Add a New Listing</div>
                    </button>
                    <button onClick={() => navigate('/update-info')} className="option-card">
                        <span role="img" aria-label="update">📝</span>
                        <div>Update Restaurant Info</div>
                    </button>
                </div>
            </div>
            {/* Add listing details and update options */}
        </div>
    );
}

export default BusinessOwnerDashboard;
