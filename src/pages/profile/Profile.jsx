
// import React from "react";
import React, { useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import Popup from 'reactjs-popup';
import './css/profile.css'
import './css/line-chart.css'
import './css/ranklist.css'
import './css/graph.css'
import axios from 'axios';
import line from "simple-line-chart";
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import { useEffect } from 'react';
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

const Profile_Block = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailID, setemailID] = useState('');
    const [userName, setUsername] = useState('');
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const url3 = "https://lmsapiv01.azurewebsites.net/api/user";
    axios
        .get(url3)
        .then((response) => {
            //   console.log(response.data[0][0].Answer)
            for (let i = 0; i < response.data[0].length; i++) {
                setFirstName(response.data[0][0].FirstName);
                setLastName(response.data[0][0].LastName);
                setemailID(response.data[0][0].EmailId);
                setUsername(response.data[0][0].UserName);
            }

        })
        .catch((err) => {
            console.log(err);
        });

    const submitImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Inheritance")
        data.append("cloud_name", "dugkqpzgq")

        fetch("https://api.cloudinary.com/v1_1/dugkqpzgq/image/upload", {
            method: "post",
            body: data
        }
        )
            .then((res) => res.json())
            .then((data) => {
                setUrl(data.url)
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div class="profile block">
            <a class="add-button">
                <label >
                    {/* <input type="file" class="icon entypo-plus scnd-font-color" onChange={(e) => setImage(e.target.files[0])} /> */}
                    {/* <i>i</i> */}
                </label>
            </a>
            <div class="profile-picture big-profile-picture clear">
                <img className='profile-pic-upload' src={url} />
            </div>
            <h1 class="user-name">{firstName} {lastName}</h1>
            <div class="profile-description">
                <p class="scnd-font-color">Email ID : {emailID}</p>
                <p class="scnd-font-color">UserName : {userName}</p>
            </div>

            <div class="upload-btn-wrapper">
                <button class="btn">Upload a file</button>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} name="myfile" />
            </div>
            {/* <button className="btn">Upload a file</button>
            <input type="file" ></input> */}
            <button onClick={submitImage} className='file-button'>Upload image as profile Photo</button>
        </div>
    );
};

const Graph = () => {
    // const pdata = [
    //     {
    //         name: 'MongoDb',
    //         student: 11,
    //         fees: 120
    //     },
    //     {
    //         name: 'Javascript',
    //         student: 15,
    //         fees: 12
    //     },
    //     {
    //         name: 'PHP',
    //         student: 5,
    //         fees: 10
    //     },
    //     {
    //         name: 'Java',
    //         student: 10,
    //         fees: 5
    //     },
    //     {
    //         name: 'C#',
    //         student: 9,
    //         fees: 4
    //     },
    //     {
    //         name: 'C++',
    //         student: 10,
    //         fees: 8
    //     },
    // ];

    const pdata = [
        {
            "PaperCode": 101,
            "TestName": "React",
            "Date": "2023-01-20T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T08:00:00.000Z",
            "marks": 3
        },
        {
            "PaperCode": 102,
            "TestName": "Node",
            "Date": "2023-02-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T06:30:00.000Z",
            "marks": 15
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 10
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 9
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 20
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 25
        },
        {
            "PaperCode": 103,
            "TestName": "Express",
            "Date": "2023-10-14T00:00:00.000Z",
            "StartTime": "1970-01-01",
            "EndTime": "1970-01-01T13:30:00.000Z",
            "marks": 13
        }
    ]

    pdata.map((f) => {
        f["StartTime"] = (parseInt(f.StartTime.slice(8, 10))).toString() + "/" + (parseInt(f.StartTime.slice(5, 7))).toString();
    })

    const graph_data = []
    useEffect(async () => {
        axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/4")
            .then((response) => {

                response.data[0].map((f) => {
                    var num = f.PaperCode
                    var str = num.toString()

                    axios
                        .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
                        .then((response2) => {
                            // console.log(response2.data[0])
                            response2.data[0].map((res) => {
                                if (res.UserID === 4) {
                                    f["marks"] = res.MarksScored;
                                    f["StartTime"] = f.StartTime.slice(0, 10);
                                    f["StartTime"] = f.StartTime.slice(8, 10) + " " + f.StartTime.slice(5, 7) + " " + f.StartTime.slice(0, 4);
                                }
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    // console.log(f)
                    graph_data.push(f)
                    console.log(graph_data)
                })
            })
    }, [])

    return (
        <div className='graph-head'>
            <h1 className="text-heading">
                Performance Graph
            </h1>

            {console.log("he")}
            {console.log(graph_data)}

            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="TestName" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const RankList = () => {

    const testObj = [
        {
            "UserID": 4,
            "paperCode": 103,
            "TestName": "Express",
            "FirstName": "Manav",
            "LastName": "Shah",
            "MarksScored": 5
        },
        {
            "UserID": 4,
            "paperCode": 103,
            "TestName": "Express",
            "FirstName": "Manav",
            "LastName": "Shah",
            "MarksScored": 5
        },
        {
            "UserID": 4,
            "paperCode": 103,
            "TestName": "Express",
            "FirstName": "Manav",
            "LastName": "Shah",
            "MarksScored": 5
        }
    ];

    const [obj, setObj] = useState(testObj)
    let temparr = []

    // useEffect(async () => {
    //     axios.get("https://lmsapiv01.azurewebsites.net/api/attemptedlist/4")
    //         .then((response) => {

    //             response.data[0].map((f) => {
    //                 var num = f.PaperCode
    //                 var str = num.toString()

    //                 axios
    //                     .get("https://lmsapiv01.azurewebsites.net/api/totalmarksallstuds/" + str)
    //                     .then((response2) => {
    //                         console.log(response2.data[0])
    //                         response2.data[0].map((res) => {
    //                             temparr.push(res)
    //                         })
    //                     })
    //                     .catch((err) => {
    //                         console.log(err);
    //                     });
    //             })
    //             console.log(temparr);
    //             console.log(obj);
    //         })
    //     setObj(temparr);
    // }, [])

    return (
        <div class="ranklist-container">
            <header>
                <br />
                <h1>Rankings</h1>
                <br />
            </header>
            <div class="ranklist-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>Name</th>
                            <th>Test</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                        {console.log(obj)}
                        {obj.map((e) => {
                            {console.log(e)}
                            return (
                                <tbody>
                                <tr>
                                    {/* <td class="ranklist-rank">Manav</td>
                                    <td class="ranklist-team">Shah</td>
                                    <td class="ranklist-points">Manav</td>
                                    <td class="ranklist-up-down">Shah</td> */}
                                    <td class="ranklist-rank">{e.UserID}</td>
                                    <td class="ranklist-team">{e.FirstName + ' ' + e.LastName}</td>
                                    <td class="ranklist-points">{e.TestName}</td>
                                    <td class="ranklist-up-down">{e.MarksScored}</td>
                                </tr>
                                </tbody>
                            )
                            
                        })}
                    {/* </tbody> */}
                </table>
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className='main-container'>
            <div className='container3'>
                <Profile_Block />
                <Graph />
                <RankList />
            </div>
        </div>
    );
};
export default Profile;
