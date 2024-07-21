'use client'
import { Button, Callout, TextField, Text } from '@radix-ui/themes'
import React, { use, useState } from 'react'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '@/app/validationSchema';
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';
import SimpleMDE from 'react-simplemde-editor';


type IssueFormData = z.infer<typeof validationSchema>


const IssueForm = ({ issue }: { issue?: Issue}) => {
const router = useRouter();
const {register, control, handleSubmit, formState: {errors}} = useForm<IssueFormData>({
  resolver : zodResolver(validationSchema)
});
const [error, setError] = useState('');
const [submitting, setSubmitting] = useState(false);

const onSubmit =   handleSubmit(async (data)=>{
  try {
    setSubmitting(true)
    if(issue)
    await axios.patch('/api/issues/' + issue.id, data)
   else
      await axios.post('/api/issues', data)
      router.push('/issues');
      router.refresh();
  } catch (error) {
    setError('An unexpected error occured')
    setSubmitting(false)
  }
})

  return (
<>
<div className='max-w-lg'>
    {error && 
    <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
    </Callout.Root>
    }
<form 
className=' space-y-5' 
onSubmit={onSubmit}>
<TextField.Root defaultValue={issue?.title} placeholder='Title' {...register('title')}/>
 <ErrorMessage>{errors.title?.message}</ErrorMessage>
<Controller
name='description'
control={control}
defaultValue={issue?.description}
render={({ field })=><SimpleMDE placeholder='Description' {...field}/>}
/>
<ErrorMessage>{errors.description?.message}</ErrorMessage>
<Button disabled={submitting}>
 { issue? 'Update Issue' : 'Submit New issue'}{' '}
 {submitting && <Spinner/>} 
  </Button>
</form>

</div>
</>
  )
}

export default IssueForm