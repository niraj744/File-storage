import { Html, Button, Heading } from "@react-email/components";

interface EmailProps {
  fileID: string;
  username: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({ fileID, username }) => {
  return (
    <Html lang="en">
      <Heading>{username} send this file to view</Heading>
      <Button href={process.env.URL + `/${fileID}`}>Click me</Button>
    </Html>
  );
};
