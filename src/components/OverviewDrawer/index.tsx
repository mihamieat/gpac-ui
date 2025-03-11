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

const OverviewDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="absolute top-2 right-2">
          Select hostnames
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Servers Overview Selection</DrawerTitle>
          <DrawerDescription>
            Select servers that you want to display in overview
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody>This is the drawer body content</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OverviewDrawer;
