// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Index1.css';
// import BusinessOwnerDashboard from './BusinessOwnerDashboard';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// function Index() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [location, setLocation] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const navigate = useNavigate();

//     const popularSearches = ['Pizza', 'Burgers', 'Sushi', 'Italian', 'San Francisco', 'New York'];

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         navigate(`/search?query=${searchQuery}&location=${location}`);
//     };

//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         if (query) {
//             setSuggestions(popularSearches.filter(item => item.toLowerCase().includes(query.toLowerCase())));
//         } else {
//             setSuggestions([]);
//         }
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setSearchQuery(suggestion);
//         setSuggestions([]);
//     };

//     const featuredRestaurants = [
//         { image: 'restaurant1.jpg', name: 'Italian Bistro', description: 'Italian, Pasta, Pizza', rating: 4.5 },
//         { image: 'restaurant2.jpg', name: 'Green Leaf', description: 'Vegan, Organic', rating: 4.0 },
//         { image: 'restaurant3.jpg', name: 'Sushi House', description: 'Japanese, Sushi', rating: 5.0 },
//         // Add more restaurants here
//     ];

//     const carouselResponsive = {
//         desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//         tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//         mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
//     };

//     return (
//         <div className="index-container">
//             <header className="index-header">
//                 <h1>Restaurant Finder</h1>
//                 <p>Discover the best places to eat around you</p>
//                 <nav className="navbar">
//                     <div className="logo" onClick={() => navigate('/')}>🍽️ Restaurant Finder</div>
//                     <div className="nav-links">
//                         <button onClick={() => navigate('/')} className="nav-item">Home</button>
//                         <button onClick={() => navigate('/search')} className="nav-item">Search</button>
//                         <button onClick={() => navigate('/profile')} className="nav-item">My Profile</button>
//                         <button onClick={() => navigate('/BusinessOwnerDashboard')} className="nav-item">Business Owner</button>
//                         <button onClick={() => navigate('/manage-listings')} className="nav-item">Admin</button>
//                     </div>
//                     <button className="login-btn" onClick={() => navigate('/login')}>Login / Register</button>
//                 </nav>
//             </header>

//             <div className="search-section">
//                 <form onSubmit={handleSearchSubmit} className="search-form">
//                     <input 
//                         type="text" 
//                         placeholder="Search by restaurant, cuisine, or dish" 
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                         className="search-input"
//                     />
//                     <input 
//                         type="text" 
//                         placeholder="Location (e.g., San Francisco)" 
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         className="location-input"
//                     />
//                     <button type="submit" className="search-btn">Search</button>
//                 </form>
//                 <div className="suggestions">
//                     {suggestions.map((suggestion, index) => (
//                         <div 
//                             key={index} 
//                             className="suggestion-item" 
//                             onClick={() => handleSuggestionClick(suggestion)}>
//                             {suggestion}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="featured-section">
//                 <h3>Featured Restaurants</h3>
//                 <Carousel responsive={carouselResponsive}>
//                     {featuredRestaurants.map((restaurant, index) => (
//                         <div className="restaurant-card" key={index}>
//                             <img src={restaurant.image} alt={restaurant.name} />
//                             <div className="restaurant-info">
//                                 <h4>{restaurant.name}</h4>
//                                 <p>{restaurant.description}</p>
//                                 <p>⭐ {restaurant.rating}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>

//             <div className="options-section">
//                 <h3>For Business Owners</h3>
//                 <button onClick={() => navigate('/add-listing')} className="option-card">
//                     <span role="img" aria-label="add">🏢</span>
//                     <div>Add a New Listing</div>
//                 </button>
//                 <button onClick={() => navigate('/update-info')} className="option-card">
//                     <span role="img" aria-label="update">📝</span>
//                     <div>Update Restaurant Info</div>
//                 </button>
//             </div>

//             <div className="options-section">
//                 <h3>For Admin</h3>
//                 <button onClick={() => navigate('/manage-listings')} className="admin-option">
//                     <span role="img" aria-label="manage">⚙️</span>
//                     Manage Listings
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Index;

// // function Index() {
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [location, setLocation] = useState('');
// //     const navigate = useNavigate();

// //     const handleSearchSubmit = (e) => {
// //         e.preventDefault();
// //         console.log("Searching for:", searchQuery, "in location:", location);
// //         navigate(`/search?query=${searchQuery}&location=${location}`);
// //     };

// //     return (
// //         <div className="index-container">
// //             <header className="index-header">
// //                 <h1>Restaurant Finder</h1>
// //                 <p>Discover the best places to eat around you</p>
// //                 <nav className="navbar">
// //                 <div className="logo" onClick={() => navigate('/')}>🍽️ Restaurant Finder</div>
// //                 <div className="nav-links">
// //                     <button onClick={() => navigate('/')} className="nav-item">Home</button>
// //                    <button onClick={() => navigate('/search')} className="nav-item">Search</button>
// //                     <button onClick={() => navigate('/profile')} className="nav-item">My Profile</button>
// //                   <button onClick={() => navigate('/BusinessOwnerDashboard')} className="nav-item" >Business Owner</button>
// //                   <button onClick={() => navigate('/AdminDashboard')} className="nav-item">Admin</button>
// //               </div>
// //                 <button className="login-btn" onClick={() => navigate('/login')}>Login / Register</button>
// //             </nav>
                
// //             </header>

// //             <div className="search-section">
// //                 <form onSubmit={handleSearchSubmit} className="search-form">
// //                     <input 
// //                         type="text" 
// //                         placeholder="Search by restaurant, cuisine, or dish" 
// //                         value={searchQuery}
// //                         onChange={(e) => setSearchQuery(e.target.value)}
// //                         className="search-input"
// //                     />
// //                     <input 
// //                         type="text" 
// //                         placeholder="Location (e.g., San Francisco)" 
// //                         value={location}
// //                         onChange={(e) => setLocation(e.target.value)}
// //                         className="location-input"
// //                     />
// //                     <button type="submit" className="search-btn">Search</button>
// //                 </form>
// //             </div>

// //             <div className="filter-section">
// //                 <h3>Filter Your Search</h3>
// //                 <div className="filters">
// //                     <div className="filter">
// //                         <label>Cuisine:</label>
// //                         <select>
// //                             <option>All</option>
// //                             <option>Greek</option>
// //                             <option>Mexican</option>
// //                             <option>Italian</option>
// //                             <option>Chinese</option>
// //                         </select>
// //                     </div>
                    
// //                     <div className="filter">
// //                         <label>Food Type:</label>
// //                         <select>
// //                             <option>All</option>
// //                             <option>Vegetarian</option>
// //                             <option>Vegan</option>
// //                             <option>Gluten-free</option>
// //                         </select>
// //                     </div>
                    
// //                     <div className="filter">
// //                         <label>Price Range:</label>
// //                         <select>
// //                             <option>All</option>
// //                             <option>Low</option>
// //                             <option>Medium</option>
// //                             <option>High</option>
// //                         </select>
// //                     </div>
                    
// //                     <div className="filter">
// //                         <label>Rating:</label>
// //                         <select>
// //                             <option>All</option>
// //                             <option>1 star</option>
// //                             <option>2 stars</option>
// //                             <option>3 stars</option>
// //                             <option>4 stars</option>
// //                             <option>5 stars</option>
// //                         </select>
// //                     </div>
// //                 </div>
// //             </div>

            

            

// //             <div className="featured-section">
// //                 <h3>Featured Restaurants</h3>
// //                 <div className="featured-restaurants">
// //                     <div className="restaurant-card">
// //                         <img src="restaurant1.jpg" alt="Restaurant 1" />
// //                         <div className="restaurant-info">
// //                             <h4>Italian Bistro</h4>
// //                             <p>Italian, Pasta, Pizza</p>
// //                             <p>⭐⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     <div className="restaurant-card">
// //                         <img src="restaurant2.jpg" alt="Restaurant 2" />
// //                         <div className="restaurant-info">
// //                             <h4>Green Leaf</h4>
// //                             <p>Vegan, Organic</p>
// //                             <p>⭐⭐⭐⭐</p>
// //                         </div>
// //                     </div>
// //                     {/* Add more restaurant cards as needed */}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Index;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Index1.css';

// // function Index() {
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [location, setLocation] = useState('');
// //     const navigate = useNavigate();

// //     const handleSearchSubmit = (e) => {
// //         e.preventDefault();
// //         console.log("Searching for:", searchQuery, "in location:", location);
// //         // navigate(`/search?query=${searchQuery}&location=${location}`);
// //     };

// //     return (
// //         <div className="index-container">
// //             {/* Navbar */}
// //             <nav className="navbar">
// //                 <div className="logo" onClick={() => navigate('/')}>🍽️ Restaurant Finder</div>
// //                 <div className="nav-links">
// //                     <button onClick={() => navigate('/')} className="nav-item">Home</button>
// //                     <button onClick={() => navigate('/search')} className="nav-item">Search</button>
// //                     <button onClick={() => navigate('/profile')} className="nav-item">My Profile</button>
// //                     <button onClick={() => navigate('/add-listing')} className="nav-item">Business Owner</button>
// //                     <button onClick={() => navigate('/manage-listings')} className="nav-item">Admin</button>
// //                 </div>
// //                 <button className="login-btn" onClick={() => navigate('/login')}>Login / Register</button>
// //             </nav>

// //             {/* Header Section */}
// //             <header className="index-header">
// //                 <h1>Find the Best Restaurants Near You</h1>
// //                 <p>Discover top-rated places and hidden gems around town</p>
// //             </header>

// //             {/* Search Section */}
// //             <div className="search-section">
// //                 <form onSubmit={handleSearchSubmit} className="search-form">
// //                     <input 
// //                         type="text" 
// //                         placeholder="Search by restaurant, cuisine, or dish" 
// //                         value={searchQuery}
// //                         onChange={(e) => setSearchQuery(e.target.value)}
// //                         className="search-input"
// //                     />
// //                     <input 
// //                         type="text" 
// //                         placeholder="Location (e.g., San Francisco)" 
// //                         value={location}
// //                         onChange={(e) => setLocation(e.target.value)}
// //                         className="location-input"
// //                     />
// //                     <button type="submit" className="search-btn">Search</button>
// //                 </form>
// //             </div>

// //             {/* Other Sections... (same as before) */}
// //             {/* Add remaining sections such as Filter, Options for Business Owners/Admin, Featured Restaurants, etc. */}
// //         </div>
// //     );
// // }

// // export default Index;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Select from 'react-select';
import './Index1.css';
import Footer from './Footer';
import BusinessOwnerDashboard from './BusinessOwnerDashboard';
import AdminDashboard from './BusinessOwnerDashboard';

function Index() {
    const [searchQuery, setSearchQuery] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cuisine, setCuisine] = useState([]);
    const [foodType, setFoodType] = useState([]);
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const navigate = useNavigate();

    // Google Maps Configuration
    const mapContainerStyle = { width: '100%', height: '300px' };
    const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates (San Francisco)

    const cuisinesOptions = [
        { value: 'greek', label: 'Greek' },
        { value: 'mexican', label: 'Mexican' },
        { value: 'italian', label: 'Italian' },
        { value: 'chinese', label: 'Chinese' },
    ];

    const foodTypeOptions = [
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'gluten-free', label: 'Gluten-free' },
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery, zipCode, cuisine, foodType, priceRange, rating);
        // Implement search logic here (API call or filter based on criteria)
    };

    return (
        <div className="index-container">
            <header className="index-header">
                <h1>Restaurant Finder</h1>
                <p>Discover the best places to eat around you</p>
                <nav className="navbar">
                    <div className="logo" onClick={() => navigate('/')}>🍽️ Restaurant Finder</div>
                    <div className="nav-links">
                        <button onClick={() => navigate('/')} className="nav-item">Home</button>
                        <button onClick={() => navigate('/profile')} className="nav-item">My Profile</button>
                        <button onClick={() => navigate('/BusinessOwnerDashboard')} className="nav-item">Business Owner</button>
                        <button onClick={() => navigate('/AdminDashboard')} className="nav-item">Admin</button>
                        <button onClick={() => navigate('/about')} className="nav-item">About Us</button>
                        <button onClick={() => navigate('/login')} className="login-btn">Login / Register</button>
                    </div>
                </nav>
            </header>

            <div className="search-section">
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search by name..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <input 
                        type="text" 
                        placeholder="Zip Code" 
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="zip-input"
                    />
                    <Select 
                        options={cuisinesOptions} 
                        isMulti 
                        placeholder="Cuisine Type" 
                        onChange={(selected) => setCuisine(selected)}
                        className="select-dropdown"
                    />
                    <Select 
                        options={foodTypeOptions} 
                        isMulti 
                        placeholder="Food Type" 
                        onChange={(selected) => setFoodType(selected)}
                        className="select-dropdown"
                    />
                    <select onChange={(e) => setPriceRange(e.target.value)} className="select-dropdown">
                        <option value="">Price Range</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <select onChange={(e) => setRating(e.target.value)} className="select-dropdown">
                        <option value="">Rating</option>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>

            <div className="map-section">
                <LoadScript googleMapsApiKey="AIzaSyC8ArnRrgrsSp34RuGVOqGbbh0JuXBj2ug">
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                        {restaurants.map((restaurant, index) => (
                            <Marker 
                                key={index} 
                                position={{ lat: restaurant.latitude, lng: restaurant.longitude }}
                                title={restaurant.name}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
                            
            <div className="restaurant-list">
                {restaurants.map((restaurant, index) => (
                    <div className="restaurant-card" key={index}>
                        <h3>{restaurant.name}</h3>
                        <p>Cuisine: {restaurant.cuisine}</p>
                        <p>Price: {restaurant.price}</p>
                        <p>Rating: ⭐ {restaurant.rating}</p>
                        <button onClick={() => navigate(`/restaurant/${restaurant.id}`)}>View Details</button>
                    </div>
                ))}
            </div>
            <div>
            {/* Main Content */}
            <Footer />
        </div>
        </div>
    );
}

export default Index;
