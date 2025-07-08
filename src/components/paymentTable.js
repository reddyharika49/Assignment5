import { usePaymentTable } from '../customHooks/usePaymentTable';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { flexRender } from '@tanstack/react-table';

// Sample data
const defaultData = [
  // ... your existing defaultData ...
   {
    class: 'Jr Inter...',
    academicYear: '2024-25',
    paymentHead: 'Tuition Fee',
    payMode: 'Cash',
    payHead:'Course fee',
    amount: 10000,
    paymentcampus: 'Miyapur Girls Residence',
    date: '2024-10-17',
    installments:'6'
  
  },
  {
    class: 'Jr Inter...',
    academicYear: '2024-25',
    paymentHead: 'Course Fee',
    payMode: 'Online',
      payHead:'Course fee',
    amount: 15000,
    paymentcampus: 'Miyapur Girls Residence',
    date: '2024-10-18',
    installments:'6'
    
  },
  {
    class: 'Sr Inter...',
    academicYear: '2024-25',
    paymentHead: 'Transport Fee',
    payMode: 'Cash',
      payHead:'Course fee',
    amount: 5000,
    paymentcampus: 'Miyapur Girls Residence',
    date: '2024-10-19',
     installments:'4'
    
  },
  {
    class: 'Jr Inter...',
    academicYear: '2024-25',
    paymentHead: 'Uniform Fee',
    payMode: 'Online',
      payHead:'Course fee',
    amount: 2000,
    paymentcampus: 'Miyapur Girls Residence',
    date: '2024-10-20',
     installments:'2'
    
  },
  {
    class: 'Sr Inter...',
    academicYear: '2024-25',
    paymentHead: 'Books Fee',
    payMode: 'Cash',
      payHead:'Course fee',
    amount: 3000,
    paymentcampus: 'Miyapur Girls Residence',
    date: '2024-10-21',
     installments:'4'
  },

];

const PaymentTable = () => {
  const { table } = usePaymentTable({ initialData: defaultData });

  return (
    <>
      <div className="p-2 card mx-3">
        <div className='d-flex flex-row justify-content-between'>
          <h4>Payments History</h4>
        <div>
          <Button
            variant="outlined"

            size="small"
            sx={{
              color: '#4876EE',
              borderColor: '1px solidrgb(22, 80, 226)',
              px: "10px",
              textTransform: 'capitalize',
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "6px",
              width: "90%",
              height: '75%',
            }}
          >
                    <div className='px-2'>
           <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 1.25V4.25C7.5 4.44891 7.57902 4.63968 7.71967 4.78033C7.86032 4.92098 8.05109 5 8.25 5H11.25" stroke="#4876EE" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.625 14.75H2.25C1.85218 14.75 1.47064 14.592 1.18934 14.3107C0.908035 14.0294 0.75 13.6478 0.75 13.25V2.75C0.75 2.35218 0.908035 1.97064 1.18934 1.68934C1.47064 1.40804 1.85218 1.25 2.25 1.25H7.5L11.25 5V8.75M7.5 13.25H12.75M12.75 13.25L10.5 11M12.75 13.25L10.5 15.5" stroke="#4876EE" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </div>
            Export
    
          </Button>
        </div>
        </div>
        <div
          style={{
            width: "80%",
            height: "1px",
            opacity: 0.3,
            background: "linear-gradient(90deg, #000 0%, rgba(102, 102, 102, 0.00) 100%)"
          }}
        ></div>
        <div className="overflow-x-auto pt-2">
          <div className="table-responsive">
            <table className="table">
              <thead className="bg-light">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                     <th
                        key={header.id}
                        className="p-2 text-left text-sm fw-semibold bg-light border-bottom"
                        style={{ fontFamily: "'Inter', sans-serif",fontSize:"12px"}}
                        onClick={header.column.getToggleSortingHandler()}
                      >

                        <div className="d-flex align-items-center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' ↑',
                            desc: ' ↓',
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, index) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`p-2 text-sm  fw-normal ${index !== table.getRowModel().rows.length - 1 ? 'border-bottom' : ''}`}
                        style={{
                          fontSize:"12px",
                          fontFamily: "'Inter', sans-serif",
                          color: "var(--Dark-Gray-Dark-Gray-2, #252C32)"
                        
                        }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
  className="new_paymentButton"
  style={{
    display: "flex",             // enable flexbox
    justifyContent: "center",    // center horizontally
    marginTop: "80px"            // optional spacing
  }}
>
  <Button
    variant="contained"
    size="large"
    sx={{
      borderRadius: '5px',
      textTransform: 'capitalize',
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#3425FF',
      fontSize: '12px',
      fontWeight: 400,
      boxShadow: 'none',
      color: 'white',
      '&:hover': { boxShadow: 'none' },
    }}
  >
    <Add sx={{ fontSize: 16, mr: 1 }} />
    Add New Payment
  </Button>
</div>

    </>
  );
};

export default PaymentTable;