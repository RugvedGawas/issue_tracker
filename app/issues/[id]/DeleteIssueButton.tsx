'use client';
import { Spinner } from '@/app/components';
import { AlertDialog, Button, Flex,  } from '@radix-ui/themes'
import axios from 'axios';
import delay from 'delay';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



const DeleteIssueButton = ( { issueId } : { issueId : number} ) => {

  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

const handleDeleteIssue = async () => {

  try {
    setDeleting(true);
    await axios.delete('/api/issues/' + issueId)
    router.push('/issues')
    router.refresh()
   
  } catch (error) {
    setDeleting(false)
    setError(true)
  } 

 }

const router = useRouter();

  return (
  <>
  <AlertDialog.Root>
  <AlertDialog.Trigger>
  <Button color='red'>Delete Issue</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
    <AlertDialog.Description>
    Are you sure you want to delete this issue ?
  </AlertDialog.Description>
  <Flex mt='4' gap='4'>
  <AlertDialog.Cancel>
    <Button variant='soft' color='gray'>Cancel</Button>
    </AlertDialog.Cancel>
  <AlertDialog.Action>
    <Button color='red' onClick={
    handleDeleteIssue
  } disabled={isDeleting}>Delete Issue
  {isDeleting && <Spinner />}
  </Button>
    </AlertDialog.Action>
  </Flex>

  </AlertDialog.Content>
  
  </AlertDialog.Root>

<AlertDialog.Root open={error}>
  <AlertDialog.Content>
    <AlertDialog.Title>Error</AlertDialog.Title>
    <AlertDialog.Description>This issue could not be deleted.</AlertDialog.Description>
    <Button variant='soft' color='gray' mt='2' onClick={()=> setError(false)}>OK</Button>
  </AlertDialog.Content>
</AlertDialog.Root>
  </>
  )
}

export default DeleteIssueButton