import { PageWrapper } from '../../components';
import { User } from 'components/UserCard/User.interface';
import { useEffect, useState } from 'react';
import { UsersList } from 'components/UsersList';
import { Spinner } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

// const response2 = fetch('https://dummyjson.com/users?delay=1')
//   .then((output) => output.json())
//   .catch((err: unknown) => console.error(`You are fucked: ${err}`));

export const DummyView = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  // TODO maybe use React Query and move to another file
  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    setData([]);  //
    try {
      const backendUrl = searchInput
        ? `https://dummyjson.com/users/search?q=${searchInput}`
        : 'https://dummyjson.com/users?delay=2000'
      console.log('backend url: ', backendUrl);

      const response = await fetch(backendUrl);

      // TODO add typing for backend type (for pagination)
      const data = await response.json();
      const users: User[] = data.users;
      setData(users);
    } catch(err: unknown) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  // Dummy but working
  useEffect(() => {
    fetchData();
    // Of course it is SO MUCH unneficient, TODO: debounce
  }, [searchInput]);

  return (
    <PageWrapper title="Dummy Page">
      <p>Welcome on dummy page!</p>
      <Input type="search" variant="bordered" label="Search" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
      <div className="flex">
        {
          isError && <p>Something bad happened!</p>
        }
        {
          isLoading && <Spinner />
        }
        {
          data && <UsersList users={data} />
        }
      </div>
  </PageWrapper>
  )
};
