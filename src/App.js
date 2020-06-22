import React, { Component } from 'react';
import rc from 'randomcolor';
import {Typography} from '@material-ui/core';
import {Cards,Chart,CompanyPicker,CompanyRemover} from './components';

import styles from './App.module.css';
import { fetchData } from './api'
class App extends React.Component{
    state = {
        data:[{}],
        company:'',
        bgc:[]
    }
    async componentDidMount(){
        console.log(this.state)
        const fetchedData = await fetchData();
        this.setState({data:[],company:'',bgc:[]})
        setInterval(async() => {
            console.log(this.state)
            const {data,com,bgc} = this.state;
            const clist = data.map(data=>data.symbol)
            const newData = [];
            var i;
            for(i=0;i<clist.length;i++){
                newData.push(await fetchData(clist[i]));
            }
            this.setState({data:newData,company:com,bgc})
        }, 5000);
                
    }

handleCompanyChange = async(company) =>{
    if(company){
    const {data,com,bgc} = this.state;
    if(data.some(item => company === item.symbol)){

    }
    else{
    const fetchedData = await fetchData(company);
    data.push(fetchedData)
    bgc.push(rc({hue: 'random',luminosity: 'bright'}))
    
    }
    this.setState({data:data,company:company,bgc:bgc})
}
}

handleCompanyRemove = async(company) =>{
    if(company){
    const {data,com,bgc} = this.state;
    const companyList = data.map(index=>index.symbol)
    var index = companyList.indexOf(company);
    if (index > -1) {
      data.splice(index, 1);
      bgc.splice(index,1);
    } 
    this.setState({data:data,company:'',bgc:bgc})
}
}

reloadComponent = ()=>{
    console.log(this.state)
    const {data,com} = this.state;
    const clist = data.map(data=>data.symbol)
    const newData = [];
    var i;
    for(i=0;i<clist.length;i++){
        newData.push(fetchData(clist[i]));
    }
    this.setState({data:newData,company:com})
}
 
    render(){
        const {data,company,bgc} = this.state;
        console.log(data)
        if(bgc.length == 0)
        {
            return(
            
            <div className={styles.main}>
                <div className={styles.container}>
                <Typography variant="h5">Real-time Stock Price Chart</Typography>
                </div>
                <div  className={styles.container}>
                <Typography variant="body2">Choose a Company</Typography>
                <CompanyPicker handleCompanyChange= {this.handleCompanyChange}/>      
                </div>
            </div>)
        }
        else{
        if (data.length>=1){
        return(
            
            <div className={styles.main}>
                <div className={styles.container}>
                <Typography variant="h5">Real-time Stock Price Chart</Typography>
                </div>
                <div className={styles.container}>
                <Typography variant="body2">Choose a Company</Typography>
                    <CompanyPicker handleCompanyChange= {this.handleCompanyChange}/>
                    <br/>
                    <Typography variant="body2">Remove Company</Typography>
                    <CompanyRemover data={data} handleCompanyRemove= {this.handleCompanyRemove}/>
                </div>
                <div class={styles.cardsContainer}>
                    {data.map((index,i) => <Cards key={i} data={index} bgc={bgc[i]}/>)}
                    {/* <Cards data={data}/> */}
                </div>
                <div  className={styles.container}>
                    <Chart data={data} company={company} bgc={bgc}/>
                      
                </div>
            </div>
            
        )}
        
    }
    }
      
}

export default App;