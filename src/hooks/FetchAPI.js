import { useEffect, useState } from 'react';

function FetchAPI(URL) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(URL);
        const json = await response.json();

        setData(json);
    }
    fetchData();
  }, [URL]);

  return data;
}

export default FetchAPI;