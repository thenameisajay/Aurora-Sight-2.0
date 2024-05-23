import { Skeleton } from '@/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export function SkeletonTable() {
    return (
        <Table>
            <TableCaption>
                The table below provides a detailed overview of the geomagnetic
                activity status, including color-coded alerts and descriptions
                to help you know where and when you might see the aurora.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead className="w-[100px] text-right">
                        Color
                    </TableHead>
                    <TableHead className=" w-28 text-start">
                        Color-Code
                    </TableHead>

                    <TableHead className=" text-start">Description</TableHead>
                    <TableHead className="text-start">Meaning</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Skeleton className="h-[20px] w-[100px] rounded-full" />
                    </TableCell>
                    <TableCell className="text-right font-bold">
                        <Skeleton className="h-[20px] w-[100px] rounded-full" />
                    </TableCell>
                    <TableCell className="font-semibold">
                        <Skeleton className="h-[20px] w-[100px] rounded-full" />
                    </TableCell>
                    <TableCell className="md:text-base">
                        <Skeleton className="h-[20px] w-[500px] rounded-full" />
                    </TableCell>
                    <TableCell className="md:text-base">
                        <Skeleton className="h-[20px] w-[400px] rounded-full" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
