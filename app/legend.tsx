"use client"
import {
    Text,
    Legend,
    CategoryBar,
    Metric,
    Bold
} from '@tremor/react';
import { University } from './table';
import { InstructorMetric } from './page';

export default async function UniversityLegend({ metric }: { metric: InstructorMetric }) {

    const values = [metric.parseable, metric.notParseable]
    const sum = metric.parseable + metric.notParseable
    return (
        <>
            <Text><Bold>Toplam Akademisyen Endeksi</Bold></Text>
            <Metric>{sum}</Metric>
            <CategoryBar className="mt-4" colors={["emerald", "red"]} categoryPercentageValues={values} />
            <Legend
                className="mt-3"
                categories={["Akademik çalışmaları toplanan", "Akademik çalışmaları toplanamayan"]}
                colors={["emerald", "red"]}
            />
        </>
    );
}
