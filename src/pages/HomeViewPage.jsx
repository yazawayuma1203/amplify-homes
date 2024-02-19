import { useEffect,useState } from "react"
import { UserProfile } from "../ui-components"
import { API } from "aws-amplify"
import * as query from "../graphql/queries"
import { useLocation } from 'react-router-dom'
import { Home } from "../models"

export default function HomeViewPage(){
    const search = useLocation().search;
    const queryString = new URLSearchParams(search);
    const [profile,setProfile] = useState(null);

    useEffect(()=>{
       // GraphQLのschema.graphqlから自動生成したqueryのコードを使ってユーザ情報を取得
       const f = async () =>{
         const profile = await API.graphql({query:query.getHome,variables:{id:queryString.get("id")}})
         setProfile({
             address:Home.data.getHome.address,
             image_url:Home.data.getHome.image_url,
             price: Home.data.getHome.price
         })
       }
       f()
    },[])

    return (
        <UserProfile profile={profile} />
    )
}