import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import Form from '@/app/ui/invoices/create-form';
import React from 'react'

export default async function Page(){
  return (
    <main>
        <Breadcrumbs
        breadcrumbs={
            [
                {label:'Invoices',href:'/dashboard/invoices'},
                {label:'Create Invoice',href:'/dashboard/invoices/create',active:true},   
            ]
        }
        />
        <Form></Form>
    </main>
  )
}
