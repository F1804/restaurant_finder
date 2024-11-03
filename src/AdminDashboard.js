import React from 'react';

import { useNavigate  } from 'react-router-dom';

    function AdminDashboard() {
       const navigate = useNavigate();
    
        const handleRemoveListing  = async () => {
            // API call to add listing
        };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <button onClick={handleRemoveListing}>Remove Example Listing</button>

        <div className="options-section">
        <h3>For Admin</h3>
        <button onClick={() => navigate('/manage-listings')} className="admin-option">
            <span role="img" aria-label="manage">⚙️</span>
            Manage Listings
        </button>
    </div>
    </div>
    );
}

export default AdminDashboard;
