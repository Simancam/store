import InventoryTable from "@/components/dashboard/table";
import { Package } from "lucide-react";

const Inventory = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div>
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-muted-foreground" />
            <h1 className="text-2xl font-semibold tracking-tight">Inventario</h1>
          </div>
        </div>
      </div>
      <InventoryTable />
    </div>
  );
};

export default Inventory;
