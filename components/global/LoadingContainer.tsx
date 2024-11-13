import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import Container from "./Container";

const LoadingContainer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        <LoadingProducts />
        <LoadingProducts />
        <LoadingProducts />
      </div>
    </Container>
  );
};

function LoadingProducts() {
  return (
    <Card>
      <CardContent className="p-3">
        <Skeleton className="relative h-64 md:h-48 overflow-hidden" />
        <div className="mt-4 flex flex-col gap-4">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[90px]" />
        </div>
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
