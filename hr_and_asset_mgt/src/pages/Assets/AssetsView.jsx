import React from "react";
import AssetsHeader from "./AssetsHeader";
import AssetsFilters from "./AssetsFilter";
import AssetsTable from "./AssetsTable";
import AssetActions from "./AssetActionCards";

const assetsData = [
  {
    id: 1,
    name: "Dell Laptop XPS 15",
    code: "AST001",
    category: "Laptops",
    location: "Main Office",
    subLocation: "IT Store",
    custodian: "Ahmed Al Mansoori",
    department: "Sales",
    price: "AED 5,500",
    purchaseDate: "2023-06-15",
    status: "In Use",
    statusKey: "in-use",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    code: "AST002",
    category: "Mobile Devices",
    location: "Main Office",
    subLocation: "IT Store",
    custodian: "Sarah Johnson",
    department: "Sales",
    price: "AED 4,200",
    purchaseDate: "2023-09-20",
    status: "In Use",
    statusKey: "in-use",
  },
  {
    id: 3,
    name: "Toyota Hiace Van",
    code: "AST003",
    category: "Commercial Vehicles",
    location: "Main Office",
    subLocation: "Vehicle Pool",
    custodian: "Operations Team",
    department: "Operations",
    price: "AED 95,000",
    purchaseDate: "2022-03-10",
    status: "Under Maintenance",
    statusKey: "maintenance",
  },
];


function Assets(){
    return <div>
        <AssetsHeader />
        <AssetsFilters />
        <AssetsTable assets={assetsData}/>
        <AssetActions />
    </div>;
}

export default Assets;