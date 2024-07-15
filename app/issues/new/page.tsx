'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
  return (
<>
<div className='max-w-lg space-y-5'>
<TextField.Root placeholder='Title'/>
<TextArea placeholder='Description'/>
<Button>Submit New issue</Button>
</div>


</>
  )
}

export default NewIssue