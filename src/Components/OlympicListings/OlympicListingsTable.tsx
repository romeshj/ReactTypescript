/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React from 'react';
// eslint-disable-next-line linebreak-style

interface dataOProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  olympicData: any[];
}

// eslint-disable-next-line react/prop-types
const OlympicListingsTable: React.FC<dataOProps> = ({ olympicData }) => (
  <div>
    <table style={{
      border: 'solid 1px red',
      borderCollapse: 'collapse'
    }}
    >
      <tbody>
        {
          // eslint-disable-next-line react/prop-types
          olympicData && olympicData.length
            ? // eslint-disable-next-line react/prop-types
            olympicData.map((d) => (
              <tr style={{
                border: 'solid 1px red'
              }}
              >
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.athlete}
                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.age}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.country}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.year}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.date}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.sport}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.gold}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.silver}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.bronze}

                </td>
                <td style={{
                  border: 'solid 1px red',
                  padding: '10px'
                }}
                >
                  {d.total}

                </td>
              </tr>
            ))
            : null
        }
      </tbody>
    </table>
  </div>
  // eslint-disable-next-line linebreak-style
);

export default OlympicListingsTable;
