// import { useState, useEffect } from 'react';
// import { Clock, Star, Search } from 'lucide-react';
// import './blog.css';

// // استيراد الصور
// import Bali from '../assets/images/Bali.jpg';
// import Paris from '../assets/images/Paris.jpg';
// import Tokyo from '../assets/images/Tokyo.jpg';
// import India from '../assets/images/India.jpg';
// import Venice from '../assets/images/Venice.jpg';
// import Tunis from '../assets/images/Tunis.jpg';
// import Giza from '../assets/images/Giza.jpg';
// import Luxor from '../assets/images/luxor.jpg';
// import Aswan from '../assets/images/Aswan.jpg';

// const destinationJson = [
//   { name: 'Tunis Village', img: Tunis, time: '5 Days - 4 Nights', star: '4 (5 reviews)', price: 88000 },
//   { name: 'Giza', img: Giza, time: '3 Days - 2 Nights', star: '2 (5 reviews)', price: 55000 },
//   { name: 'Luxor', img: Luxor, time: '6 Days - 5 Nights', star: '3 (5 reviews)', price: 74000 },
//   { name: 'Aswan', img: Aswan, time: '7 Days - 6 Nights', star: '2 (5 reviews)', price: 90000 },
//   { name: 'Bali', img: Bali, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: 69999 },
//   { name: 'Venice', img: Venice, time: '4 Days - 3 Nights', star: '4 (20 reviews)', price: 85000 },
//   { name: 'Tokyo', img: Tokyo, time: '6 Days - 5 Nights', star: '5 (35 reviews)', price: 95000 },
//   { name: 'India', img: India, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: 50000 },
//   { name: 'Paris', img: Paris, time: '7 Days - 6 Nights', star: '4 (18 reviews)', price: 120000 },
//   { name: 'Tokyo', img: Tokyo, time: '3 Days - 2 Nights', star: '2 (5 reviews)', price: 40000 },
//   { name: 'Tunis Village', img: Tunis, time: '3 Days - 2 Nights', star: '4 (5 reviews)', price: 65000 },
//   { name: 'Aswan', img: Aswan, time: '4 Days - 3 Nights', star: '2 (5 reviews)', price: 78000 }
// ];

// const Blog = () => {
//   const [filters, setFilters] = useState({
//     location: '',
//     time: '',
//     priceMin: '',
//     priceMax: ''
//   });

//   const [packages, setPackages] = useState([]);

//   useEffect(() => {
//     setPackages(destinationJson);
//   }, []);

//   const filteredDestinations = packages.filter(dest => {
//     const matchesLocation = filters.location === '' || dest.name.toLowerCase().includes(filters.location.toLowerCase());
//     const matchesTime = filters.time === '' || dest.time === filters.time;
//     const matchesPrice = (!filters.priceMin || dest.price >= parseInt(filters.priceMin)) &&
//                         (!filters.priceMax || dest.price <= parseInt(filters.priceMax));
//     return matchesLocation && matchesTime && matchesPrice;
//   });

//   return (
//     <div className="blog-container">
//       {/* قسم الفلترة */}
//       <div className="filter-section">
//         <h2 className="filter-title">ابحث عن وجهتك المثالية</h2>
//         <div className="filter-grid">
//           <div className="filter-item">
//             <label className="filter-label">
//               <Search className="filter-icon" />
//               الموقع
//             </label>
//             <input
//               type="text"
//               className="filter-input"
//               value={filters.location}
//               onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//               placeholder="أي موقع"
//             />
//           </div>

//           <div className="filter-item">
//             <label className="filter-label">المدة</label>
//             <select
//               className="filter-input"
//               value={filters.time}
//               onChange={(e) => setFilters({ ...filters, time: e.target.value })}
//             >
//               <option value="">أي مدة</option>
//               <option value="3 Days - 2 Nights">3 أيام - 2 ليالي</option>
//               <option value="4 Days - 3 Nights">4 أيام - 3 ليالي</option>
//               <option value="5 Days - 4 Nights">5 أيام - 4 ليالي</option>
//               <option value="6 Days - 5 Nights">6 أيام - 5 ليالي</option>
//               <option value="7 Days - 6 Nights">7 أيام - 6 ليالي</option>
//             </select>
//           </div>

//           <div className="filter-item">
//             <label className="filter-label">السعر الأدنى</label>
//             <input
//               type="number"
//               className="filter-input"
//               value={filters.priceMin}
//               onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
//               placeholder="أي سعر"
//             />
//           </div>

//           <div className="filter-item">
//             <label className="filter-label">السعر الأعلى</label>
//             <input
//               type="number"
//               className="filter-input"
//               value={filters.priceMax}
//               onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
//               placeholder="أي سعر"
//             />
//           </div>

//           <button
//             className="reset-button"
//             onClick={() => setFilters({ location: '', time: '', priceMin: '', priceMax: '' })}
//           >
//             إعادة الضبط
//           </button>
//         </div>
//       </div>

//       {/* عرض النتائج */}
//       <h1 className="section-title">أفضل الوجهات السياحية</h1>
//       <div className="title-divider"></div>

//       {filteredDestinations.length > 0 ? (
//         <div className="destinations-grid">
//           {filteredDestinations.map((destination, index) => (
//             <div key={index} className="destination-card">
//               <div className="card-image-container">
//                 <img
//                   src={destination.img}
//                   alt={destination.name}
//                   className="card-image"
//                 />
//                 <div className="price-tag">${destination.price.toLocaleString()}</div>
//               </div>
//               <div className="card-content">
//                 <div className="card-meta">
//                   <span className="duration">
//                     <Clock className="meta-icon" />
//                     {destination.time}
//                   </span>
//                   <span className="rating">
//                     <Star className="meta-icon filled" />
//                     {destination.star}
//                   </span>
//                 </div>
//                 <h3 className="card-title">{destination.name}</h3>
//                 <p className="card-description">
//                   استمتع بجمال وثقافة {destination.name}
//                 </p>
//                 <button className="view-button">
//                   عرض التفاصيل
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="no-results">
//           <p>لا توجد نتائج مطابقة لبحثك</p>
//           <button 
//             className="reset-button"
//             onClick={() => setFilters({ location: '', time: '', priceMin: '', priceMax: '' })}
//           >
//             عرض جميع الوجهات
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blog;




import { useState, useEffect } from 'react';
import { Clock, Star, Search } from 'lucide-react';
import './popular.css';

// Import images
// import Bali from '../assets/images/Bali.jpg';
// import Paris from '../assets/images/Paris.jpg';
// import Tokyo from '../assets/images/Tokyo.jpg';
// import India from '../assets/images/India.jpg';
// import Venice from '../assets/images/Venice.jpg';
// import Tunis from '../assets/images/Tunis.jpg';
// import Giza from '../assets/images/Giza.jpg';
// import Luxor from '../assets/images/luxor.jpg';
// import Aswan from '../assets/images/Aswan.jpg';

import Bali from '../assets/images/room_2.jpg';
import Paris from '../assets/images/room_3.jpg';
import Tokyo from '../assets/images/room_4.jpg';
import India from '../assets/images/room_5.jpg';
import Venice from '../assets/images/room_6.jpg';
import Tunis from '../assets/images/room_4.jpg';
import Giza from '../assets/images/room_7.jpg';
import Luxor from '../assets/images/room_8.jpg';
import Aswan from '../assets/images/room_9.jpg';

const destinationJson = [
  { name: 'Tunis Village', img: Tunis, time: '5 Days - 4 Nights', star: '4 (5 reviews)', price: 88000 },
  { name: 'Giza', img: Giza, time: '3 Days - 2 Nights', star: '2 (5 reviews)', price: 55000 },
  { name: 'Luxor', img: Luxor, time: '6 Days - 5 Nights', star: '3 (5 reviews)', price: 74000 },
  { name: 'Aswan', img: Aswan, time: '7 Days - 6 Nights', star: '2 (5 reviews)', price: 90000 },
  { name: 'Bali', img: Bali, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: 69999 },
  { name: 'Venice', img: Venice, time: '4 Days - 3 Nights', star: '4 (20 reviews)', price: 85000 },
  { name: 'Tokyo', img: Tokyo, time: '6 Days - 5 Nights', star: '5 (35 reviews)', price: 95000 },
  { name: 'India', img: India, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: 50000 },
  { name: 'Paris', img: Paris, time: '7 Days - 6 Nights', star: '4 (18 reviews)', price: 120000 },
  { name: 'Tokyo', img: Tokyo, time: '3 Days - 2 Nights', star: '2 (5 reviews)', price: 40000 },
  { name: 'Tunis Village', img: Tunis, time: '3 Days - 2 Nights', star: '4 (5 reviews)', price: 65000 },
  { name: 'Aswan', img: Aswan, time: '4 Days - 3 Nights', star: '2 (5 reviews)', price: 78000 }
];

const Popular = () => {
  const [filters, setFilters] = useState({
    location: '',
    time: '',
    priceMin: '',
    priceMax: ''
  });

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(destinationJson);
  }, []);

  const filteredDestinations = packages.filter(dest => {
    const matchesLocation = filters.location === '' || dest.name.toLowerCase().includes(filters.location.toLowerCase());
    const matchesTime = filters.time === '' || dest.time === filters.time;
    const matchesPrice = (!filters.priceMin || dest.price >= parseInt(filters.priceMin)) &&
                        (!filters.priceMax || dest.price <= parseInt(filters.priceMax));
    return matchesLocation && matchesTime && matchesPrice;
  });

  return (
    <div className="blog-container">
      {/* Filter Section */}
      <div className="filter-section">
        <h2 className="filter-title">Find Your Perfect Destination</h2>
        <div className="filter-grid">
          <div className="filter-item">
            <label className="filter-label">
              <Search className="filter-icon" />
              Location
            </label>
            <input
              type="text"
              className="filter-input"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              placeholder="Any location"
            />
          </div>

          <div className="filter-item">
            <label className="filter-label">Duration</label>
            <select
              className="filter-input"
              value={filters.time}
              onChange={(e) => setFilters({ ...filters, time: e.target.value })}
            >
              <option value="">Any duration</option>
              <option value="3 Days - 2 Nights">3 Days - 2 Nights</option>
              <option value="4 Days - 3 Nights">4 Days - 3 Nights</option>
              <option value="5 Days - 4 Nights">5 Days - 4 Nights</option>
              <option value="6 Days - 5 Nights">6 Days - 5 Nights</option>
              <option value="7 Days - 6 Nights">7 Days - 6 Nights</option>
            </select>
          </div>

          <div className="filter-item">
            <label className="filter-label">Min Price</label>
            <input
              type="number"
              className="filter-input"
              value={filters.priceMin}
              onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
              placeholder="Any price"
            />
          </div>

          <div className="filter-item">
            <label className="filter-label">Max Price</label>
            <input
              type="number"
              className="filter-input"
              value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
              placeholder="Any price"
            />
          </div>

          <button
            className="reset-button"
            onClick={() => setFilters({ location: '', time: '', priceMin: '', priceMax: '' })}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Destination Results */}
      <h1 className="section-title">Top Choice Rooms</h1>
      <div className="title-divider"></div>

      {filteredDestinations.length > 0 ? (
        <div className="destinations-grid">
          {filteredDestinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="card-image-container">
                <img
                  src={destination.img}
                  alt={destination.name}
                  className="card-image"
                />
                <div className="price-tag">${destination.price.toLocaleString()}</div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="duration">
                    <Clock className="meta-icon" />
                    {destination.time}
                  </span>
                  <span className="rating">
                    <Star className="meta-icon filled" />
                    {destination.star}
                  </span>
                </div>
                <h3 className="card-title">{destination.name}</h3>
                <p className="card-description">
                  Enjoy the beauty and culture of {destination.name}
                </p>
                <button className="view-button">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No results match your search</p>
          <button 
            className="reset-button"
            onClick={() => setFilters({ location: '', time: '', priceMin: '', priceMax: '' })}
          >
            Show All Destinations
          </button>
        </div>
      )}
    </div>
  );
};

export default Popular;
