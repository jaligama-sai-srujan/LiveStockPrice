import React,{useState,useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CompanyPicker.module.css';

import {fetchCompany} from '../../api';
const CompanyPicker = ({handleCompanyChange}) =>{
    const [fetchedCompany, setFetchedCompany] = useState([]);
    useEffect(()=>{
        const fetchAPI = async() =>{
            setFetchedCompany(await fetchCompany())
        }
        fetchAPI();
    },[setFetchedCompany])

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => {handleCompanyChange(e.target.value)}}>
                <option >   </option>
                {fetchedCompany.map((company,i) => <option key={i} value={company}>{company}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CompanyPicker;