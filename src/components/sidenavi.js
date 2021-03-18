import { Menu, Switch } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState,useEffect, useRef} from 'react'
import axios from 'axios';
import Details from '../pages/Details'
import { Link } from 'react-router-dom';



const { SubMenu } = Menu;

const  Sider = () => {


const [info, setInfo] = useState([]);
const [media, setMedia] = useState([]);
const [species, setSpecies]= useState([]);
const [error, setError] = useState('');



  const handleClick = (e) => {
    //console.log('click ', e.key);


  };

useEffect(() => {

   axios
        .get("https://api.gbif.org/v1/species/search")
        .then((res) => {
          setInfo(res.data.results);
          //console.log(info)
          // console.log(res.data);

        })
        .catch((err) => {
           setError("Ooops the fascinating GBIF API Data is currently unavailable, please try later")
          console.log(error);
        });
    }, []);



    return (
      <>


 <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      <Menu.ItemGroup key="g1" title="Species (Kingdom - Phylum)">

      {info.map((info) =>

       <Menu.Item key={info.key}>
       <Link to={{
        pathname: '/Details/'+ info.kingdom+'/',
        state: {info}
        }}
        >
       {info.kingdom} - {info.phylum}
        </Link></Menu.Item>


       )}
       </Menu.ItemGroup>
      </Menu>

      </>
    );

}

export default Sider;