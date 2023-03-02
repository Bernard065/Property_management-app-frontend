import React from 'react'
import './Dashboard.css'

const OverViewList = () => {
  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Property Name</div>
        <div className="table-headers col">Property Type</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col">Tenant</div>
        {/* <div className="table-headers col"></div> */}
      </div>
      <div
        style={{ backgroundColor: "#ffffff" }}
        className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
      >
        <div className="property_attr col">Silverton Heights</div>
        <div className="property_attr col">Apartment</div>
        <div className="property_attr col">Ksh. 10,000</div>
        <div className="property_attr col">Charlie Dibalde</div>
      </div>
      <div
        style={{ backgroundColor: "#ffffff" }}
        className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
      >
        <div className="property_attr col">Juja </div>
        <div className="property_attr col">Apartment</div>
        <div className="property_attr col">Ksh. 6,000</div>
        <div className="property_attr col">Nick ward</div>
      </div>
      <div
        style={{ backgroundColor: "#ffffff" }}
        className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
      >
        <div className="property_attr col">Kilimani </div>
        <div className="property_attr col">Apartments</div>
        <div className="property_attr col">Ksh. 100,000</div>
        <div className="property_attr col">Victoria Nase</div>
      </div>
      <div
        style={{ backgroundColor: "#ffffff" }}
        className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
      >
        <div className="property_attr col">OuterMall</div>
        <div className="property_attr col">Mall</div>
        <div className="property_attr col">Ksh. 10,000,000</div>
        <div className="property_attr col">Ben K</div>
      </div>
    </div>
  )
}

export default OverViewList