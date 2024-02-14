import { User } from "components/UserCard/User.interface";
import { UserCard } from "components/UserCard";
interface UserCardListProps {
  users: User[];
};

export const UsersList = (props: UserCardListProps) => {
  const { users } = props;
  console.log(users);
  return (
    <div>
      {users.map((user: User) => <UserCard key={user.id} {...user}></UserCard>)}
    </div>
  );
}
