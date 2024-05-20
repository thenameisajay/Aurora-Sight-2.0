import { WarningCircle } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { getRelativeTime } from '@/utils/helpers/getRelativeTime';

export default function ErrorCard({
    refresh,
    dateUpdated,
}: {
    refresh: () => void;
    dateUpdated: Date;
}) {
    return (
        <Card className="  relative mx-4  mt-5 md:mx-0 md:w-96 ">
            <CardHeader>
                <CardTitle className=" text-1xl md:text-3xl">Status</CardTitle>
                <CardDescription className="text-gray-500 md:text-base">
                    There was an error fetching the data.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex  flex-col items-center justify-center">
                <WarningCircle size={50} />
                <Button onClick={refresh} className="my-4">
                    Refresh
                </Button>
            </CardContent>
            <CardFooter>
                <p className="mt-2  text-xs text-gray-600 md:text-sm">
                    <span>Last Synced:</span> {getRelativeTime(dateUpdated)}
                </p>
            </CardFooter>
        </Card>
    );
}
