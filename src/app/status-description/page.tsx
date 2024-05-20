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
import { statusInfo } from '@/data/status-descriptions/status-descriptions';

const heading = 'Status Description';

const description = 'A detailed overview of the geomagnetic activity status ';

const StatusTable = () => {
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
                        <TableHead className="w-[100px] text-right">
                            Color
                        </TableHead>
                        <TableHead></TableHead>
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
                    {statusInfo.map((status) => (
                        <TableRow key={status.key}>
                            <TableCell className="text-right font-bold">
                                {status.key?.toUpperCase()}
                            </TableCell>
                            <TableCell>
                                <div
                                    className=" h-6  w-20 rounded-full "
                                    style={{
                                        backgroundColor: `${status.color}`,
                                    }}
                                />
                            </TableCell>
                            <TableCell className="font-semibold">
                                {status.color}
                            </TableCell>
                            <TableCell className="md:text-base">
                                {status.description}
                            </TableCell>
                            <TableCell className="md:text-base">
                                {status.meaning}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <HeadBanner heading={heading} description={description} />
            <StatusTable />
            <Footer />
        </div>
    );
}
