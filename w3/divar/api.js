import fetch from 'node-fetch';

async function getDataFromDivar(category,params) {
  try{
    console.log("vorud be gereftan etelat");
    const response = await fetch(`https://api.divar.ir/v8/web-search/tehran/${category}?q=${params}`)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    // console.log(response)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    const data = await response.json()
    // console.log(data.web_widgets.post_list.slice(0, 1));
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

    console.log(data.web_widgets.post_list.slice(0,1))
    console.log("khoruj");
  }catch(err){
    console.log(err);
  }
}
getDataFromDivar("car",206)
