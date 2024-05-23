'use client';

import { useQuery } from '@tanstack/react-query';

import { statusDescription } from '@/api/statusDescription/statusDescription';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import Footer from '@/components/footer/Footer';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { StatusDescription } from '@/types/interfaces/statusDescriptions';

const heading = 'Status Description';

const description = 'A detailed overview of the geomagnetic activity status ';

const StatusTable = ({ data }: { data: StatusDescription[] }) => {
    console.log('Status Description in the Table:', data);

    return (
        <div className="container relative   top-14  mx-auto flex items-center justify-center  p-4">
            <Table>
                <TableCaption>
                    The table below provides a detailed overview of the
                    geomagnetic activity status, including color-coded alerts
                    and descriptions to help you know where and when you might
                    see the aurora.
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

                        <TableHead className=" text-start">
                            Description
                        </TableHead>
                        <TableHead className="text-start">Meaning</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((status) => (
                        <TableRow key={status.color}>
                            <TableCell>
                                <div
                                    className=" h-6  w-20 rounded-full "
                                    style={{
                                        backgroundColor: `${status.color}`,
                                    }}
                                />
                            </TableCell>
                            <TableCell className="text-right font-bold">
                                {status.id.toUpperCase()}
                            </TableCell>
                            <TableCell className="font-semibold">
                                {status.color.toUpperCase()}
                            </TableCell>
                            <TableCell className="md:text-base">
                                {status.description.text}
                            </TableCell>
                            <TableCell className="md:text-base">
                                {status.meaning.text}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default function Page() {
    const { data, isPending, isError } = useQuery({
        queryKey: ['status-description'],
        queryFn: statusDescription,
    });

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <HeadBanner heading={heading} description={description} />
            <StatusTable data={data} />
            <Footer />
        </div>
    );
}
