import useSwr from 'swr'

import fetcher from add fetcher import;

const useBillboard = () => {
  const { data, error, isLoading} = useSwr('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  }
};

export default useBillboard;