import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const DocsDetails = () => {
  const { data } = useLoaderData();
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      {data.map((user) => {
        return (
          <Card key={user._id} className="w-96">
            <CardHeader floated={false} className="h-80">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {user.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                {user.email}
              </Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default DocsDetails;
