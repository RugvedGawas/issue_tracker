import { Skeleton } from '@/app/components'
import { Table } from '@radix-ui/themes'
import IssueToolbar from './IssueToolbar'

const LoadingIssuesPage = () => {
const issues = [1,2,3,4,5]

  return (
<>
<IssueToolbar/>
<Table.Root variant='surface'>
          <Table.Header >
             <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
             <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
             <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Header>
          <Table.Body>
          {
            issues.map((issue) => 
            <Table.Row key={issue}>
               <Table.Cell>
               <Skeleton/>
                <div className='block md:hidden'>
                <Skeleton/>
                </div>
                </Table.Cell>
               <Table.Cell className='hidden md:table-cell'>
               <Skeleton/>
               </Table.Cell>
               <Table.Cell className='hidden md:table-cell'>
               <Skeleton/>
                </Table.Cell>
            </Table.Row>
            )
          }

          </Table.Body>
        </Table.Root>
</>
  )
}

export default LoadingIssuesPage