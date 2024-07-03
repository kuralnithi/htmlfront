import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './textEditor.css'

const TextEditor = () => {

  const [editorContent, setEditorContent] = useState('');

  const getContent = async () => {
    const result = await axios.get('http://localhost:5000/api/content');
    const data = await result.data.data[0].content;
    setEditorContent(data);
  }
  useEffect(() => {
    getContent();
  }, [])




  
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  
  const handleSubmit = async () => {

    const submitData = await axios.post('http://localhost:5000/api/edit/content',{
      content:editorContent
    })
  
  if(submitData.data.statusCode === 200){

    console.log("data submitted successfully");
  }
  }





  

  return (
    <Grid>
      <Grid container p={2} mt={2} >
        <Grid item sm={12} md={12} lg={12} p={1} bgcolor={"#ffffff"} boxShadow={1} borderRadius={'4px'} minHeight={'500px'}>
          <Typography variant='h4'>Pre request Editor </Typography>
          <Box>
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              modules={TextEditor.modules}
              formats={TextEditor.formats}
            />  
            <Box mt={2} display={'flex'} justifyContent={"flex-end"} alignItems={"flex-end"}>
              <Button variant='outlined' onClick={handleSubmit}> Submit</Button>
            </Box>
          </Box>
        
        </Grid>
       
      </Grid>
    </Grid>
  );
};

TextEditor.modules = {
  toolbar: [
    
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image', 'video'],
    ['clean']],
};

TextEditor.formats = [
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default TextEditor;