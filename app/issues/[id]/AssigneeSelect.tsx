'use client';
import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelect = () => {
  return (
   <Select.Root>
    <Select.Trigger placeholder='Assign...'/>
    <Select.Content>
        <Select.Group>
            <Select.Label>Suggetions</Select.Label>
            <Select.Item value="1">Rugved Gawas</Select.Item>
        </Select.Group>
    </Select.Content>
   </Select.Root>
  )
}

export default AssigneeSelect