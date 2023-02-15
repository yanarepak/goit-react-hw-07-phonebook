import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63ebe79b31ef61473b1b2d1c.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_,thunkAPI) => {
        try{
        const {data} = await axios.get('/contacts');
        console.log(data)
        return data
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, phone},thunkAPI) => {
        try{
        const {data} = await axios.post('/contacts', { name, phone });
        console.log(data)
        return data
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id,thunkAPI) => {
        try{
        const {data} = await axios.delete(`/contacts/${id}`);
        console.log(data)
        return data
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)