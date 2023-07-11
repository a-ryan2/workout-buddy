// const axios = require("axios");

export const exerciseOptions = {
  method: 'GET',
 // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key':'7367e78e15msh9f2f4c629a0ab97p191151jsn011a3c8ea6eb',
    // process.env.REACT_APP-RAPID-API_KEY
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  //url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 // params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
  headers: {
    'X-RapidAPI-Key': '7367e78e15msh9f2f4c629a0ab97p191151jsn011a3c8ea6eb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async (url,options)=>{
  const res=await fetch(url,options);
  const data= await res.json();
  return data;
};