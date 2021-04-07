import React, {Component} from 'react';
import * as Realm from "realm-web";
import Table from "./Table"

const REALM_APP_ID = "application-0-iarqd"
const app = new Realm.App({ id: REALM_APP_ID });

const mongodb = app.currentUser.mongoClient("mongodb-atlas");
const housing = mongodb.db("resources").collection("housingInfo");
let findStuff=async({setData}, data, {setLoaded})=>{
    const entry = await housing.find({});
    console.log(entry)
    entry.forEach(el=>{
        data.push(el)
    })
    setData(data)
    setLoaded(false)
}
export default function Resources() {
    const [data, setData] = React.useState([]);
    const [loading, setLoaded] = React.useState(true)
    console.log("Res "+app.currentUser.id)
    if(loading){
        findStuff({setData}, data, {setLoaded})
    }
    const columns=[{
        Header: 'Housing',
        columns:[{
            Header: "Name",
            accessor: "name"
        },{
            Header: "Type",
            accessor: "housing"
        },{
            Header: "Phone",
            accessor: "phone"
        },{
            Header: "Other Contact",
            accessor: "contact"
        },{
            Header: "Address",
            accessor: "address"
        },{
            Header: "City",
            accessor: "city"
        },{
            Header: "Zip Code",
            accessor: "zip"
        },{
            Header: "County",
            accessor: "county"
        },{
            Header: "Notes",
            accessor: "notes"
        }]
    }]
    return (
        <div>
           {
                //name housing phone contact address city zip county notes
                loading?"Loading data...":<Table columns={columns} data={data} />
            }
        </div>
    )
}