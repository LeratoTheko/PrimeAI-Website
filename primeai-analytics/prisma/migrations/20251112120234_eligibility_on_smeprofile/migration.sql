-- AlterTable
ALTER TABLE "SmeProfile" ADD COLUMN     "digital_customer_eligible" BOOLEAN DEFAULT false,
ADD COLUMN     "digital_operations_eligible" BOOLEAN DEFAULT false,
ADD COLUMN     "digital_workspace_eligible" BOOLEAN DEFAULT false;
