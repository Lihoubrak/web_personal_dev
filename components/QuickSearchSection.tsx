import { Button } from "@/components/ui/button";

export function QuickSearchSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Search</h3>
      <div className="space-y-3">
        <Button className="w-full justify-start text-left bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal">
          Cheap Rooms for Rent
        </Button>
        <Button className="w-full justify-start text-left bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal">
          Mini Apartments for Rent
        </Button>
        <Button className="w-full justify-start text-left bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal">
          Shared Accommodation HCMC
        </Button>
      </div>
    </div>
  );
}
