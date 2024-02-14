import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { User } from "./User.interface";

export const UserCard = (props: User) => {
  const { firstName, lastName, age, image } = props;
  return (
    // TODO: add grid? Or something else?
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{firstName} {lastName}</h4>
        <small className="text-default-500">Age: {age}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
