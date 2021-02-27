import React from "react";
import axios from "axios";
class App extends React.Component{
    // API key : 3c024bb258b14a3796b0ddd518d59c0f
    state={
        post:""
    }
    componentDidMount(){
        this.getData();
    }
    async getData(){
        await axios.get("http://newsapi.org/v2/everything?q=tesla&from=2021-01-27&sortBy=publishedAt&apiKey=3c024bb258b14a3796b0ddd518d59c0f")
                    .then((res)=>{
                        console.log(res);
                        this.setState({post:res.data});
                    })
        
    }
    render(){
        return JSON.stringify(this.state.post);
    }
        
   
        
    
}
export default App;