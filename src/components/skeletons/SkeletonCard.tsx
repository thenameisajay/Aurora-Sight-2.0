import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/*
 *  This SkeletonCard component is used on the main page to display a loading state for the card component.
 */
export default function SkeletonCard() {
    return (
        <Card className=" mt-4 flex  h-64 w-96 items-center justify-start p-4 ">
            <div className="flex flex-col space-y-3 p-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[300px]" />
                </div>
                <Skeleton className="h-4 w-[320px]" />
                <Skeleton className="h-[125px] w-[320px] rounded-xl px-2" />
            </div>
        </Card>
    );
}
