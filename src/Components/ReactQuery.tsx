/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Loading from './Loading';
import Error from './Error';

const queryClient = new QueryClient();

export const TableExample = () => {
  // eslint-disable-next-line prettier/prettier
  const { isLoading, error, data } = useQuery('repoData', () =>
    // eslint-disable-next-line prettier/prettier
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json()));

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        <strong>{data.subscribers_count}</strong>
      </p>
      <p>
        <strong>{data.stargazers_count}</strong>
      </p>
      <p>
        <strong>{data.forks_count}</strong>
      </p>
    </div>
  );
};

const ReactQuery: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TableExample />
  </QueryClientProvider>
);

export default ReactQuery;
