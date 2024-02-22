import { HomeCreateForm } from "../ui-components";
import React,{ useState } from "react";
import { Amplify, API } from "aws-amplify";
import * as mutation from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

import awsmobile from '../aws-exports';

Amplify.configure({
  ...awsmobile,                               
  aws_appsync_authenticationType: "API_KEY",
});

export default function HomeCreateFormPage() {
  let navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const HomeOverrides = {
    "address.value" : {
      onChange: (event) => { setAddress(event.target.value) }  
    },
    "image_url.value" : {
      onChange: (event) => { setImageUrl(event.target.value) }
    },
    "price.value" : {
      onChange: (event) => { setPrice(event.target.value) }
    },
    "SubmitButton" : {
      onClick : () => registerHome(),
      padding: "16px 16px 16px 16px"
    },
  };

  const registerHome = () => {

    const home = {
      address: address,
      image_url: imageUrl,
      price:price,
    }

    const f = async () => {
      const newData = 
      await API.graphql ( 
        {
          query : mutation.createHome,
          variables : {input: home},
          authMode: "API_KEY",
        }
      )
      navigate("/data?id=" + newData.data.createHome.id)
    };
    f();
  };

  return (
    <HomeCreateForm overrides={HomeOverrides} />
  )
};