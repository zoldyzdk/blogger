import { Button } from "./ui/button";

function AlertBtn({ message }: { message: string }) {
 return <Button onClick={() => alert(message)}>Alert</Button>;
}

export { AlertBtn };
