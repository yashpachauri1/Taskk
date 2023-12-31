import { json, useLoaderData, Await } from "react-router-dom";
import { Suspense } from 'react';
import TaskList from "../components/TaskList";

const Tasks = () => {
    const tasks = useLoaderData();



    return (<>

        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={tasks}>
                {(loadedTasks) => <TaskList tasks={loadedTasks} />}
            </Await>
        </Suspense>
    </>)

}

export default Tasks;
//'http://localhost:5000/'
export async function loader() {
    const response = await fetch('https://just-le8p.onrender.com/');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //   status: 500,
        // });
        throw json(
            { message: 'Could not fetch events.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }

    
}