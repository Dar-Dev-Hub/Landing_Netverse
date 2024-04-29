import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Coursaccess() {
    return (
      <Card className=" ml-20 mr-30 mt-6 w-70 mb-20">
        <CardHeader color="blue-gray" className="relative h-40">
          <img
            src="https://ahaslides.com/wp-content/uploads/2023/06/SEO3651-thumb.png"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  