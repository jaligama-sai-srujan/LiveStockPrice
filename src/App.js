import React, { Component } from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CompanyPicker from './components/CompanyPicker/CompanyPicker';

import {Cards,Chart,CompanyPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api'
class App extends React.Component{
    state = {
        data:{},
        company:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

handleCompanyChange = async(company) =>{
    const fetchedData = await fetchData(company);
    this.setState({data:fetchedData, company:company})
}

    render(){
        const {data,company} = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                
                <Chart data={data} company={company}/>
                <CompanyPicker handleCompanyChange= {this.handleCompanyChange}/>
            </div>
        )
    }
}

export default App;