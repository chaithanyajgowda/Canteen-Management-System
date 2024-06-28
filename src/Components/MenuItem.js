import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './CarouselPage';
import NavPage from './NavPage';
const MenuItem = () => {
  return (
    <div>
      <style>{`
        body {
          background-color: white;
          font-family: 'Arial', sans-serif;
        }
        
        .btn-warning {
          background-color: #ff9800;
          border: none;
          transition: background-color 0.3s;
        }
        .btn-warning:hover {
          background-color: #e68900;
        }
        .card {
          margin-top: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          border: none;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 15px;
        }
        .card:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .card-img-top {
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
          margin-right: 10px;
        }
        .card-body {
          text-align: left;
          padding: 0 15px;
          flex-grow: 1;
        }
        .card-title {
          font-size: 1.25em;
          margin-bottom: 10px;
          color: #333;
        }
        .btn-view {
          background-color: #ff5722;
          color: white;
          transition: background-color 0.3s;
          border: none;
          padding: 5px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          font-weight: bold;
        }
        .btn-view:hover {
          background-color: #e64a19;
        }
        .container-menu {
          max-width: 900px;
          margin: auto;
        }
          .carousel-container {
          width: 100%;
          height: 500px; /* Adjust the height as needed */
          margin: auto;
          p
        }
        .carousel-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>


      {/* <<nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Canteen Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-warning" href="#">Online Order</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
<NavPage/>
<CarouselPage/>
      <div className="container-menu mt-5">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://images.alphacoders.com/862/thumb-1920-862639.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Breakfast</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fast Food</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://th.bing.com/th/id/OIP.21XG1xTLOPD5KUE5jbEtUQHaGU?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dessert</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://th.bing.com/th?id=OIP.MkmdcW0GA4qxZ8f_hKzXWQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Beverages</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://th.bing.com/th?id=OIP.8iLVyVDaePRtm8ryNhLkHQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Salads</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="d-flex align-items-center">
                <img src="https://th.bing.com/th?id=OIP.lsE17OVe-elD1hd5GVCfdAHaFc&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Chats</h5>
                </div>
              </div>
              <button className="btn btn-view">View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;


