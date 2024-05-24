'use client';

import { useQuery } from '@tanstack/react-query';

import { statusDescription } from '@/api/statusDescription/statusDescription';
import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import ErrorCard from '@/components/errors/ErrorCard';
import Footer from '@/components/footer/Footer';
import { SkeletonTable } from '@/components/skeletons/SkeletonTable';
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

const StatusTable = ({ data }: { data: StatusDescription[] | undefined }) => {
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
                    {data?.map((status) => (
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
    const { data, isPending, isError, refetch } = useQuery({
        queryKey: ['status-description'],
        queryFn: statusDescription,
    });

    return (
        <>
            <div className="flex  flex-col items-center justify-center ">
                <HeadBanner title={heading} description={description} />
                {isError && (
                    <div className="flex flex-col items-center justify-center">
                        <ErrorCard refresh={refetch} />
                    </div>
                )}

                {isPending ? (
                    <div className="container relative   top-14  mx-auto flex items-center justify-center  p-4">
                        <SkeletonTable />
                    </div>
                ) : (
                    !isError && data && <StatusTable data={data} />
                )}
            </div>
            <div className=" h-10  md:h-20"></div> <Footer />
        </>
    );
}
