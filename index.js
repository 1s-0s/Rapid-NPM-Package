const news1=require("./components/news");

const KEY="3c024bb258b14a3796b0ddd518d59c0f";

const callback=(data)=>{
    console.log(data);
    return data;
}
news1(KEY,callback);


