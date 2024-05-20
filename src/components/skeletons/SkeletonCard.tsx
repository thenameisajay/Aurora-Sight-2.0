import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/*
 *  This SkeletonCard component is used on the main page to display a loading state for the card component.
 */
export default function SkeletonCard() {
    return (
        <Card className="  relative mx-4 mt-3 h-96 overflow-y-scroll  md:w-96 ">
            <div className="flex flex-col space-y-3 p-4">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px] md:w-[350px]" />
                    <Skeleton className="h-4 w-[250px] md:w-[350px]" />
                </div>
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-[125px] w-[250px] rounded-xl px-2 md:w-[350px] " />
                <Skeleton className="h-[125px] w-[250px] rounded-xl px-2 md:w-[350px]" />
            </div>
        </Card>
    );
}
