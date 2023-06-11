import { Instructor } from "../instructors/[id]/page";
import InstructorAllTable from "./instable";


async function getInstructors() : Promise<Instructor[]> {
    const res = await fetch(`http://89.252.131.124:8080/api/instructor/`)

    const parsed = []
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const response = await res.json();

    const data = response.data;
    return data;

}

export default async function InstructorTablePage() {
    const instructor =  await getInstructors();
    console.log(instructor)

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <InstructorAllTable data={instructor}/>
        </main>
    );
}
