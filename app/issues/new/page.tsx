'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
<>
<div className='max-w-lg space-y-5'>
<TextField.Root placeholder='Title'/>
<SimpleMDE placeholder='Description'/>
<Button>Submit New issue</Button>
</div>


</>
  )
}

export default NewIssue