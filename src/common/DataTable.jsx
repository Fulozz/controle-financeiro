import React from 'react'

const DataTable = ({ data = [
    {
        id: 1,
        dueDate: '2023-10-01',
        status: 'Paid',
        description: 'Rent payment',
        amount: '$1000',
        category: 'House',
        attachment: 'receipt.pdf'
    },
    {
        id: 2,
        dueDate: '2023-10-05',
        status: 'Pending',
        description: 'Car insurance',
        amount: '$200',
        category: 'Car',
        attachment: 'insurance.pdf'
    },
    {
        id: 3,
        dueDate: '2023-10-10',
        status: 'Overdue',
        description: 'Netflix subscription',
        amount: '$15',
        category: 'Streaming',
        attachment: 'invoice.pdf'
    }
], colums = [
    { id: 'dueDate', label: 'Due Date' },
    { id: 'status', label: 'Status' },
    { id: 'description', label: 'Description' },
    { id: 'amount', label: 'Amount' },
    { id: 'category', label: 'Category' },
    { id: 'attachment', label: 'Attachment' }
], resourceTitle = "Gastos recorrentes"}) => {
    const mockData = [
        {
            id: 1,
            dueDate: '2023-10-01',
            status: 'Paid',
            description: 'Rent payment',
            amount: '$1000',
            category: 'House',
            attachment: 'receipt.pdf'
        },
        {
            id: 2,
            dueDate: '2023-10-05',
            status: 'Pending',
            description: 'Car insurance',
            amount: '$200',
            category: 'Car',
            attachment: 'insurance.pdf'
        },
        {
            id: 3,
            dueDate: '2023-10-10',
            status: 'Overdue',
            description: 'Netflix subscription',
            amount: '$15',
            category: 'Streaming',
            attachment: 'invoice.pdf'
        }
    ];

    const mockColumns = [
        { id: 'dueDate', label: 'Due Date' },
        { id: 'status', label: 'Status' },
        { id: 'description', label: 'Description' },
        { id: 'amount', label: 'Amount' },
        { id: 'category', label: 'Category' },
        { id: 'attachment', label: 'Attachment' }
    ];
    // TODO: Implement the form llinke naturalmente bom v2
  return (
    <div>
        <div className="overflow-x-auto shadow-lg bg-white dark:bg-black border-white border-2 rounded-lg p-2">
            <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200 items-center">
            <caption className="">{resourceTitle}</caption>
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Dia
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Descrição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Valor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Categoria
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                        Anexos
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id}>
                    {colums.map((colum) => (
                    <td key={colum.id}>{row[colum.id]}</td>
                    ))}
                </tr>
                ))}
                
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default DataTable