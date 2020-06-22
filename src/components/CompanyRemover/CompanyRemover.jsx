import React,{useState,useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CompanyRemover.module.css';

const CompanyRemover = ({data,handleCompanyRemove}) =>{
    if(data.length){
        console.log(data.length)
    const companyAvailable = data.map(index=>index.symbol)
    console.log(companyAvailable)
    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => {handleCompanyRemove(e.target.value)}}>
            <option> </option>
            {companyAvailable.map((symbol,i) => <option key={i} value={symbol}>{symbol}</option>)}
    {/* <option value='1'>Hello</option> */}
            </NativeSelect>
        </FormControl>
    )}
}

export default CompanyRemover;