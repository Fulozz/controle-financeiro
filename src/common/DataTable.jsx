import React from 'react';

const DataTable = ({
  data = [
    {
      id: 1,
      dueDate: '01',
      description: 'Rent payment',
      amount: '$1000',
      category: 'House',
    },
    {
      id: 2,
      dueDate: '05',
      description: 'Car insurance',
      amount: '$200',
      category: 'Car',
    },
    {
      id: 3,
      dueDate: '10',
      description: 'Netflix subscription',
      amount: '$15',
      category: 'Streaming',
    },
  ],
  columns = [
    { id: 'dueDate', label: 'Due Date' },
    { id: 'description', label: 'Description' },
    { id: 'amount', label: 'Amount' },
    { id: 'category', label: 'Category' },

  ],
  resourceTitle = "Gastos recorrentes",
  search,
}) => {
  // Filter the data based on the search term (same logic as before)
  const filteredData = data.filter((item) => {
    const searchTermLower = search.toLowerCase();
    let found = false;

    columns.forEach((column) => {
      if (typeof item[column.id] === 'string') {
        found = found || item[column.id].toLowerCase().includes(searchTermLower);
      }
    });

    return found;
  });

  return (
    <div className="overflow-x-auto shadow-lg bg-white dark:bg-black border-white border-2 rounded-lg p-2 mx-4">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200 items-center">
        <caption className="">{resourceTitle}</caption>
        <thead>
          <tr className="sticky top-0">
            {columns.map((column) => (
              <th
                key={column.id}
                className="px-2 py-1 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="text-gray-700 dark:text-gray-400">
              {columns.map((column) => (
                <td key={column.id} className="px-2 py-1">
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;