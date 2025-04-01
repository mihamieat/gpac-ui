import { Button } from "@/components/tremor/Button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/tremor/Drawer";
import ServerListTable from "@/components/ServerListTable";

const OverviewDrawer = ({
  hostnames,
  setHostnames,
}: {
  hostnames: string[];
  setHostnames: (hostnames: string[] | ((prev: string[]) => string[])) => void;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary" className="absolute top-2 right-2">
          Add/Remove Servers
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Servers Overview Selection</DrawerTitle>
          <DrawerDescription>
            Select servers that you want to display/hide in overview
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>
          <ServerListTable hostnames={hostnames} setHostnames={setHostnames} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OverviewDrawer;
