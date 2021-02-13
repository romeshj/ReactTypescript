/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Loading from '../Loading';
import Error from '../Error';
import OlympicListingsTable from './OlympicListingsTable';

const queryClient = new QueryClient();

export const TableExample = () => {
  // eslint-disable-next-line no-unused-vars
  const [enabled, setEnabled] = React.useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [winnersData, setWinnersData] = React.useState<any[]>([]);
  // eslint-disable-next-line prettier/prettier
  const { isLoading, error, data } = useQuery('repoData', () => fetch(
    'https://www.ag-grid.com/example-assets/olympic-winners.json'
    // eslint-disable-next-line function-paren-newline
  ).then((res) => res.json()), {
    enabled
  }
  );
  // eslint-disable-next-line no-console
  // console.log(isLoading, error, data);
  // eslint-disable-next-line prettier/prettier
  if (isLoading) return <Loading />;

  if (error) return <Error />;

  // eslint-disable-next-line no-console
  // console.log(isLoading, error, data);

  const onClickHandler = () => {
    setEnabled(true);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onClickHandler()}
      >
        FETCH
      </button>
      {data && <OlympicListingsTable olympicData={data.slice(0, 200)} />}

    </div>
  );
};

const OlympicListingsQuery: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TableExample />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default OlympicListingsQuery;
