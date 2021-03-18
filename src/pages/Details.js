import {Table, Button, Space } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState,useEffect, useRef} from 'react';
import axios from 'axios';


const  Details = (props) => {

const id = props.location.state.info.key;

const [vernacular, setVernacular] = useState([]);

const [error, setError] = useState('');
const [sorted, setSorted] = useState(null);
const [filtered, setFiltered] = useState(null);
const { Column, ColumnGroup } = Table;





useEffect(() => {

      axios
             .get("https://api.gbif.org/v1/species/" +id + "/vernacularNames")
             .then((res) => {
               setVernacular(res.data.results);

               console.log(vernacular)
              // console.log(res.data.results);

             })
             .catch((err) => {
               setError("Ooops the fascinating GBIF API Data is currently unavailable, please try later")
               console.log(err);
             });


 }, [vernacular]);



//console.log("species here", species);
//console.log("vernacular here",vernacular);
    return (
      <>
        <div className=" text-center container">
                <h1>Classification and Taxonomy</h1>
                 {vernacular.map((vernacular) =>
                 vernacular.language,
                 console.log("vernacular oui",vernacular)
                     )}

                 <p></p>


                <Table dataSource={vernacular}>

                    <Column title="VernacularName" dataIndex="vernacularName" key="vernacularName" />

                   <Column title="Language" dataIndex="language" key="language" />



                 </Table>
        </div>
      </>
    );

}

export default Details;