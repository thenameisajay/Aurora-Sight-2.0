import { WarningCircle } from '@phosphor-icons/react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { getRelativeTime } from '@/utils/helpers/getRelativeTime';

export default function ErrorCard() {
    return (
        <Card className="  relative mt-5  w-96 ">
            <CardHeader>
                <CardTitle className=" md:text-3xl">Status</CardTitle>
                <CardDescription className="text-base text-gray-500">
                    There was an error fetching the data.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex w-full justify-center">
                <WarningCircle size={50} />
            </CardContent>
            <CardFooter>
                <p className="text-sm text-gray-600">
                    <span>Last Updated:</span> {getRelativeTime(new Date())}
                </p>
            </CardFooter>
        </Card>
    );
}
